import type { Metadata } from "next";

export const siteName = "Mihir Sahu";
export const siteUrl = "https://www.mihirsahu.sh";
export const twitterHandle = "@TheMihirSahu";
export const siteDescription =
  "Mihir Sahu builds software and authentication systems. Explore his projects, writing on product craft, work history, and favorite tools.";

export const siteSections = [
  {
    href: "/about",
    title: "About",
    description:
      "Meet Mihir Sahu, a software engineer building authentication systems at Visa. Read about his work, interests, and previous roles.",
  },
  {
    href: "/thoughts",
    title: "Essays",
    description:
      "Essays by Mihir Sahu on building software, product craft, and the ideas behind thoughtful products.",
  },
  {
    href: "/builds",
    title: "Builds",
    description:
      "Explore software projects built by Mihir Sahu, including browser extensions, native apps, developer tools, and personal websites.",
  },
  {
    href: "/tools",
    title: "Tools",
    description:
      "Browse Mihir Sahu's favorite tools for coding, note taking, design, travel, and everyday life.",
  },
] as const;

export function buildSiteUrl(path = "/") {
  if (path === "/") {
    return `${siteUrl}/`;
  }

  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export type PagePreviewImage = {
  path: string;
  alt: string;
  width?: number;
  height?: number;
};

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
  image?: PagePreviewImage,
): Metadata {
  const url = buildSiteUrl(path);
  const fullTitle = path === "/" ? siteName : `${title} | ${siteName}`;
  const previewImage = image
    ? {
        url: buildSiteUrl(image.path),
        alt: image.alt,
        width: image.width,
        height: image.height,
      }
    : { url: buildSiteUrl("/opengraph-image.png"), alt: siteName };

  return {
    title: path === "/" ? { absolute: siteName } : title,
    description,
    alternates: {
      canonical: url,
      types: { "application/rss+xml": buildSiteUrl("/rss.xml") },
    },
    openGraph: {
      url,
      title: fullTitle,
      description,
      siteName,
      type: "website",
      images: [previewImage],
    },
    twitter: {
      card: "summary_large_image",
      creator: twitterHandle,
      title: fullTitle,
      description,
      images: [previewImage],
    },
  };
}
