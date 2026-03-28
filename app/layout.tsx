import type { Metadata } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import SiteShell from "./components/site-shell";
import "./globals.css";
import {
  buildSiteUrl,
  siteDescription,
  siteName,
  siteUrl,
  twitterHandle,
} from "./site-metadata";

const berkeleyMono = localFont({
  src: [
    {
      path: "../public/fonts/BerkeleyMono-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/BerkeleyMono-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/BerkeleyMono-Oblique.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/BerkeleyMono-Bold-Oblique.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-berkeley-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  alternates: {
    types: {
      "application/rss+xml": buildSiteUrl("/rss.xml"),
    },
  },
  openGraph: {
    type: "website",
    siteName,
    title: siteName,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    creator: twitterHandle,
    title: siteName,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${berkeleyMono.className} antialiased bg-[url('/texture.svg')] bg-repeat bg-[length:3px_3px]`}
      >
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
