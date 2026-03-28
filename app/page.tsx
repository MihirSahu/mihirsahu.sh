import type { Metadata } from "next";
import Home from "./components/home";
import {
  buildSiteUrl,
  siteDescription,
  siteName,
  siteUrl,
  twitterHandle,
} from "./site-metadata";

const homeUrl = `${siteUrl}/`;

export const metadata: Metadata = {
  title: siteName,
  description: siteDescription,
  alternates: {
    canonical: homeUrl,
    types: {
      "application/rss+xml": buildSiteUrl("/rss.xml"),
    },
  },
  openGraph: {
    url: homeUrl,
    title: siteName,
    description: siteDescription,
    siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: twitterHandle,
    title: siteName,
    description: siteDescription,
  },
};

export default function Page() {
  return <Home />;
}
