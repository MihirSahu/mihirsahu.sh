import type { Metadata } from "next";
import Script from "next/script";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "Mihir Sahu",
  description: "Personal website of Mihir Sahu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${berkeleyMono.className} antialiased bg-[url('/texture.svg')] bg-repeat bg-[length:3px_3px]`}
      >
        {children}
      </body>
    </html>
  );
}
