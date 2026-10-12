import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { runInThisContext } from "node:vm";
import { createElement as h } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { ImageResponse } from "next/og.js";
import sharp from "sharp";
import ts from "typescript";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const modules = new Map();

// Read the same registry and artwork components as the site, without a separate
// copy of essay text or ASCII art and without adding a TSX runner dependency.
function loadSource(filename) {
  if (modules.has(filename)) return modules.get(filename);
  const { outputText } = ts.transpileModule(readFileSync(filename, "utf8"), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      jsx: ts.JsxEmit.ReactJSX,
      esModuleInterop: true,
    },
  });
  const requireFromFile = createRequire(filename);
  const exports = {};
  modules.set(filename, exports);
  const execute = runInThisContext(
    `(function(require, exports) {\n${outputText}\n})`,
    { filename },
  );
  execute((id) => {
    if (!id.startsWith(".")) return requireFromFile(id);
    const source = resolve(dirname(filename), id);
    for (const suffix of ["", ".ts", ".tsx"]) {
      const path = source + suffix;
      if (ts.sys.fileExists(path)) return loadSource(path);
    }
    throw new Error(`Cannot resolve ${id} from ${filename}`);
  }, exports);
  return exports;
}

const { getPublishedThoughts } = loadSource(
  resolve(root, "app/thoughts/thoughts-data.ts"),
);
const { siteName, siteUrl } = loadSource(resolve(root, "app/site-metadata.ts"));
const fonts = [
  {
    name: "Berkeley Mono",
    data: readFileSync(resolve(root, "public/fonts/BerkeleyMono-Regular.otf")),
    weight: 400,
    style: "normal",
  },
  {
    name: "Berkeley Mono",
    data: readFileSync(resolve(root, "public/fonts/BerkeleyMono-Bold.otf")),
    weight: 700,
    style: "normal",
  },
];

for (const thought of getPublishedThoughts()) {
  const { image, artwork, description } = thought.preview;
  const Art = loadSource(resolve(root, "app/thoughts", artwork)).default;
  // CSS classes and CSS variables do not resolve outside the page. Supply the
  // foreground and a monospaced font when rasterizing the existing SVG artwork.
  const svg = renderToStaticMarkup(h(Art))
    .replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg" color="#fafafa"')
    .replace(/font-family:var\([^)]*\), monospace/g, "font-family:monospace");
  const { data, info } = await sharp(Buffer.from(svg))
    .resize({ width: 430, height: 510, fit: "inside" })
    .png()
    .toBuffer({ resolveWithObject: true });

  const response = new ImageResponse(
    h("div", {
      style: {
        display: "flex",
        position: "relative",
        width: "100%",
        height: "100%",
        backgroundColor: "#0a0a0a",
        color: "#fafafa",
        fontFamily: "Berkeley Mono",
      },
    },
    h("div", {
      style: { position: "absolute", left: 64, top: 58, fontSize: 26 },
    }, `[ ${siteName} ]`),
    h("div", {
      style: {
        display: "flex",
        position: "absolute",
        left: 64,
        top: 182,
        width: 600,
        flexDirection: "column",
        gap: 24,
      },
    },
    h("div", {
      style: { color: "#a3a3a3", fontSize: 18, letterSpacing: 3 },
    }, "ESSAYS"),
    h("div", {
      style: { fontSize: 64, fontWeight: 700, lineHeight: 1.15 },
    }, `[ ${thought.title} ]`),
    h("div", {
      style: { width: 580, fontSize: 26, lineHeight: 1.5, color: "#d4d4d4" },
    }, description)),
    h("div", {
      style: {
        display: "flex",
        position: "absolute",
        right: 50,
        top: 60,
        width: 430,
        height: 510,
        alignItems: "center",
        justifyContent: "center",
      },
    }, h("img", {
      src: `data:image/png;base64,${data.toString("base64")}`,
      width: info.width,
      height: info.height,
    })),
    h("div", {
      style: { position: "absolute", left: 64, bottom: 58, color: "#a3a3a3", fontSize: 20 },
    }, `[ ${new URL(siteUrl).hostname.replace(/^www\./, "")} ]`)),
    { width: image.width, height: image.height, fonts },
  );

  const output = resolve(root, "public", image.path.slice(1));
  mkdirSync(dirname(output), { recursive: true });
  writeFileSync(output, Buffer.from(await response.arrayBuffer()));
  console.log(`Generated ${image.path} (${image.width} × ${image.height})`);
}
