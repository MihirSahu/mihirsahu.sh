import { buildSiteUrl, siteDescription, siteName } from "../site-metadata";
import { getPublishedThoughts } from "../thoughts/thoughts-data";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value.replace(/[<>&'"]/g, (character) => {
    switch (character) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      case "'":
        return "&apos;";
      case '"':
        return "&quot;";
      default:
        return character;
    }
  });
}

export async function GET() {
  const feedUrl = buildSiteUrl("/rss.xml");
  const publishedThoughts = getPublishedThoughts();
  const lastBuildDate =
    publishedThoughts.length > 0
      ? `<lastBuildDate>${new Date(publishedThoughts[0].publishedAt).toUTCString()}</lastBuildDate>`
      : "";
  const items = publishedThoughts
    .map((thought) => {
      const thoughtUrl = buildSiteUrl(thought.href);

      return `<item>
  <title>${escapeXml(thought.title)}</title>
  <link>${escapeXml(thoughtUrl)}</link>
  <guid isPermaLink="true">${escapeXml(thoughtUrl)}</guid>
  <pubDate>${new Date(thought.publishedAt).toUTCString()}</pubDate>
  <description>${escapeXml(thought.description)}</description>
</item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${escapeXml(siteName)}</title>
  <link>${escapeXml(buildSiteUrl("/"))}</link>
  <description>${escapeXml(siteDescription)}</description>
  <language>en-us</language>
  <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />
  ${lastBuildDate}
  ${items}
</channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
