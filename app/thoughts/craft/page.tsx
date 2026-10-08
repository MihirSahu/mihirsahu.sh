import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CraftArt from "./craft-art";
import { buildSiteUrl, createPageMetadata, siteName } from "../../site-metadata";
import { thoughts } from "../thoughts-data";

const paragraphs = [
  "Most products are built to work. In a time when software is malleable, this is the bare minimum. Few products are built to be felt. When software becomes commoditized, craft becomes the true differentiator. The teams that focus on functionality and feel are the ones that win and make a profound impact on the world.",
  "Craft is the marriage between the depth of thought and the execution of a product. It encompasses design, aesthetics, feel, and functionality. Parts of it can be seen as optional during new waves of innovation. In the 1990s, making software work was hard enough that most teams favored new features over refinement. The teams that were capable enough of producing a well-crafted product — both in terms of functionality and feel — built the companies we know today. Google, for example, paired its PageRank algorithm with a minimal interface — just a search bar and two buttons. It radiated purpose. Craft is not just the visual aspect of a product — it's the functionality and feel. It's a thread that must be woven into all aspects of the user experience.",
  "Craft is inspiration. It's an act of love. Just as those who came before us passionately built cathedrals that now leave us in awe, the products we build will show other craftsmen what's possible. Our craft will blend with that of others and develop the taste of the next craftsman. And after all, taste is what makes us human.",
];

const description =
  "Mihir Sahu reflects on product craft: how thoughtful design, functionality, and feel shape software and inspire the people who build it.";

function getCraftThought() {
  const thought = thoughts.find(({ slug }) => slug === "craft");
  if (!thought) notFound();
  return thought;
}

export function generateMetadata(): Metadata {
  const thought = getCraftThought();
  const pageMetadata = createPageMetadata(thought.title, description, thought.href);

  return {
    ...pageMetadata,
    authors: [{ name: siteName, url: buildSiteUrl("/about") }],
    robots: thought.published ? undefined : { index: false, follow: true },
    openGraph: {
      ...pageMetadata.openGraph,
      type: "article",
      publishedTime: thought.published ? thought.publishedAt : undefined,
      authors: [buildSiteUrl("/about")],
    },
  };
}

export default function Craft() {
  const thought = getCraftThought();

  return (
    <article className="max-w-3xl space-y-8 leading-7">
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap gap-2 text-sm text-gray-500"
      >
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <span aria-hidden="true">/</span>
        <Link href="/thoughts" className="hover:text-foreground">
          Thoughts
        </Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{thought.title}</span>
      </nav>
      <header className="space-y-3">
        <CraftArt />
        <h1 className="text-base font-normal">[ {thought.title} ]</h1>
        <p className="text-sm text-gray-500">
          By{" "}
          <Link href="/about" rel="author" className="underline underline-offset-4">
            {siteName}
          </Link>
          {thought.published ? (
            <>
              {" · "}
              <time dateTime={thought.publishedAt}>
                {new Date(thought.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  timeZone: "UTC",
                })}
              </time>
            </>
          ) : (
            <span> · In progress</span>
          )}
        </p>
        <p className="text-gray-600">
          <i>{thought.description}</i>
        </p>
      </header>
      <div className="space-y-6">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
