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
  {
    slug: "agency",
    href: "/thoughts/agency",
    title: "Agency",
    description: "You can just do things",
    published: false,
  },
  {
    slug: "monsters",
    href: "/thoughts/monsters",
    title: "Monsters",
    description:
      "Is every moment, second, minute and day of yours really doing anything for you to get closer to becoming the best?",
    published: false,
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
