import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { runInThisContext } from "node:vm";
import { renderToStaticMarkup } from "react-dom/server";
import ts from "typescript";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

// Execute the actual route/components with an isolated registry, without editing
// the site's content or adding a TSX test runner dependency.
function loadSource(relativePath, imports = {}) {
  const filename = resolve(root, relativePath);
  const source = readFileSync(filename, "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
    },
  });
  const requireFromFile = createRequire(filename);
  const exports = {};
  const execute = runInThisContext(
    `(function(require, exports) {\n${outputText}\n})`,
    { filename },
  );
  execute((id) => Object.hasOwn(imports, id) ? imports[id] : requireFromFile(id), exports);
  return exports;
}

const craft = {
  slug: "craft",
  href: "/thoughts/craft",
  title: "Craft",
  description: "An essay about product craft.",
  published: true,
  publishedAt: "2026-05-01",
};
const { publishedAt, ...draftFields } = craft;
const draft = { ...draftFields, published: false };
const metadata = loadSource("app/site-metadata.ts");

function modules(entries) {
  const data = loadSource("app/thoughts/thoughts-data.ts");
  data.thoughts = entries;
  const page = loadSource("app/thoughts/craft/page.tsx", {
    "../thoughts-data": data,
    "../../site-metadata": metadata,
    "./craft-art": loadSource("app/thoughts/craft/craft-art.tsx"),
  });
  return { data, page };
}

test("published Craft retains its metadata, author, and publication date", () => {
  const { page } = modules([craft]);
  const result = page.generateMetadata();
  assert.equal(result.alternates.canonical, metadata.buildSiteUrl(craft.href));
  assert.equal(result.openGraph.publishedTime, publishedAt);
  assert.equal(result.robots, undefined);
  assert.equal(result.authors[0].url, metadata.buildSiteUrl("/about"));
  const html = renderToStaticMarkup(page.default());
  assert.match(html, new RegExp(`<time dateTime="${publishedAt}">`));
  assert.match(html, /rel="author"/);
  assert.doesNotMatch(html, /In progress|Invalid Date/);
});

test("draft Craft renders with noindex and without a publication date", () => {
  const { page } = modules([draft]);
  const result = page.generateMetadata();
  assert.deepEqual(result.robots, { index: false, follow: true });
  assert.equal(result.openGraph.publishedTime, undefined);
  const html = renderToStaticMarkup(page.default());
  assert.match(html, /In progress/);
  assert.match(html, /Most products are built to work/);
  assert.doesNotMatch(html, /<time|Invalid Date/);
});

test("a removed Craft entry returns Next.js notFound from metadata and page", () => {
  const { page } = modules([]);
  const isNotFound = (error) => error.digest === "NEXT_HTTP_ERROR_FALLBACK;404";
  assert.throws(() => page.generateMetadata(), isNotFound);
  assert.throws(() => page.default(), isNotFound);
});

test("only published entries reach the Thoughts index, sitemap, and RSS", async () => {
  for (const entry of [craft, draft]) {
    const { data } = modules([entry]);
    const index = loadSource("app/components/thoughts.tsx", {
      "../thoughts/thoughts-data": data,
      "./section": loadSource("app/components/section.tsx"),
    });
    const sitemap = loadSource("app/sitemap.ts", {
      "./site-metadata": metadata,
      "./thoughts/thoughts-data": data,
    });
    const rss = loadSource("app/rss.xml/route.ts", {
      "../site-metadata": metadata,
      "../thoughts/thoughts-data": data,
    });
    const indexHtml = renderToStaticMarkup(index.default());
    assert.equal(indexHtml.includes(`href="${craft.href}"`), entry.published);
    assert.equal(
      sitemap.default().some(({ url }) => url === metadata.buildSiteUrl(craft.href)),
      entry.published,
    );
    const response = await rss.GET();
    assert.equal((await response.text()).includes("<item>"), entry.published);
  }
});
