type ThoughtBase = {
  slug: string;
  href: `/thoughts/${string}`;
  title: string;
  description: string;
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
    slug: "craft",
    href: "/thoughts/craft",
    title: "Craft",
    description: "The world is a museum of passion projects. - Patrick Collison",
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
