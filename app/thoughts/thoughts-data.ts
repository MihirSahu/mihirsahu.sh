import type { PagePreviewImage } from "../site-metadata";

type ThoughtBase = {
  slug: string;
  href: `/thoughts/${string}`;
  title: string;
  description: string;
  preview: {
    description: string;
    image: PagePreviewImage & { width: 1200; height: 630 };
    artwork: string;
  };
};

type DraftThoughtEntry = ThoughtBase & {
  published: false;
  publishedAt?: never;
};

export type PublishedThoughtEntry = ThoughtBase & {
  published: true;
  publishedAt: string;
};

export type ThoughtEntry = DraftThoughtEntry | PublishedThoughtEntry;

export const thoughts: ReadonlyArray<ThoughtEntry> = [
  {
    slug: "renaissance",
    href: "/thoughts/renaissance",
    title: "Renaissance",
    description: "It’s a renaissance of technology.",
    preview: {
      description:
        "The optimism of the early internet, rediscovered in the age of agents.",
      artwork: "renaissance/vitruvian-art.tsx",
      image: {
        path: "/essay-previews/renaissance.png",
        alt: "Renaissance by Mihir Sahu, illustrated with Vitruvian Man ASCII art",
        width: 1200,
        height: 630,
      },
    },
    published: true,
    publishedAt: "2026-10-11",
  },
  {
    slug: "craft",
    href: "/thoughts/craft",
    title: "Craft",
    description: "The world is a museum of passion projects. - Patrick Collison",
    preview: {
      description:
        "When software becomes commoditized, craft becomes the true differentiator.",
      artwork: "craft/craft-art.tsx",
      image: {
        path: "/essay-previews/craft.png",
        alt: "Craft by Mihir Sahu, illustrated with Mona Lisa ASCII art",
        width: 1200,
        height: 630,
      },
    },
    published: true,
    publishedAt: "2026-05-01",
  },
];

export function getPublishedThoughts(): PublishedThoughtEntry[] {
  return thoughts
    .filter(
      (thought): thought is PublishedThoughtEntry => thought.published,
    )
    .sort(
      (left, right) =>
        new Date(right.publishedAt).getTime() -
        new Date(left.publishedAt).getTime(),
    );
}
