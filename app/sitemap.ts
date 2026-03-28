import type { MetadataRoute } from "next";
import { buildSiteUrl } from "./site-metadata";
import { getPublishedThoughts } from "./thoughts/thoughts-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const publishedThoughts = getPublishedThoughts().map((thought) => ({
    url: buildSiteUrl(thought.href),
    lastModified: thought.publishedAt,
  }));

  return [
    {
      url: buildSiteUrl("/"),
    },
    ...publishedThoughts,
  ];
}
