import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buildSiteUrl, createPageMetadata, siteName } from "../../site-metadata";
import { thoughts } from "../thoughts-data";
import VitruvianArt from "./vitruvian-art";

const paragraphs = [
  "For a long time, I envied those that were alive during the early days of the internet and saw its diffusion across society.",
  "They described the internet as open and free (as in freedom) where you could meet incredible people and share your thoughts with others around the world. Where you could build things that disrupt existing systems and be as contrarian as your heart allows.",
  "They said it felt like the Wild West.",
  "And then somewhere along the way, we lost the plot. I grew up on an internet with paywalls, tracking cookies, infinite redirects, privacy concerns, and the dreaded subscription model. I thought I would never feel how those people felt back then.",
  "And then agents happened. Suddenly the entire world has little minions with all of humanity’s knowledge at their disposal. They can build new things that otherwise would never have been built, and take apart anything that exists.",
  "It’s a renaissance of technology. People are becoming 100x more productive, curing cancers for their pets, discovering planets, printing literal machines, writing custom IoT firmware, and reverse engineering games and virtually all software.",
  "I feel hopeful and optimistic that we can use this technology for the betterment of all. It’s truly inspiring seeing the builders of today.",
  "I wasn’t around for the nascent internet. But I suspect that it might have felt something just like this.",
];

function getRenaissanceThought() {
  const thought = thoughts.find(({ slug }) => slug === "renaissance");
  if (!thought) notFound();
  return thought;
}

export function generateMetadata(): Metadata {
  const thought = getRenaissanceThought();
  const pageMetadata = createPageMetadata(
    thought.title,
    thought.preview.description,
    thought.href,
    thought.preview.image,
  );

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

export default function Renaissance() {
  const thought = getRenaissanceThought();

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
          Essays
        </Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{thought.title}</span>
      </nav>
      <header className="space-y-3">
        <VitruvianArt />
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
      <p className="text-sm text-gray-500">
        <a
          href="https://x.com/TheMihirSahu/status/2109193343435415927"
          className="underline underline-offset-4 hover:text-foreground"
        >
          Originally posted on X
        </a>
      </p>
    </article>
  );
}
