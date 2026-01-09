"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import localFont from "next/font/local";
import "./globals.css";
import { SectionProvider, useSection } from "./context/SectionContext";

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

function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { currentSection, setCurrentSection } = useSection();

  const getPageName = () => {
    if (pathname === "/") return currentSection;
    const name = pathname.slice(1);
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <span className="absolute right-4.5 origin-bottom-left -translate-y-full translate-x-full rotate-90 bg-[var(--background)]">
        [ {getPageName()} ]
      </span>
      <div className="mx-auto flex max-w-6xl items-start justify-center gap-16 px-6 py-16 md:py-24">
        <main className="w-full max-w-3xl">
          <header className="mb-12">
            <Link
              href="/"
              className="text-lg font-medium"
              onClick={() => setCurrentSection("Home")}
            >
              [ Mihir Sahu ]
            </Link>
            <p className="text-gray-600">Software Engineer</p>

            {currentSection != "Home" && pathname === "/" && (
              <div className="flex flex-col md:flex-row justify-between pt-5">
                <div
                  className="cursor-pointer"
                  onClick={() => setCurrentSection("Today")}
                >
                  [ Today ]
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => setCurrentSection("Works")}
                >
                  [ Works ]
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => setCurrentSection("Thoughts")}
                >
                  [ Thoughts ]
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => setCurrentSection("Contacts")}
                >
                  [ Contacts ]
                </div>
              </div>
            )}
          </header>
          {children}
        </main>
      </div>
    </div>
  );
}

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
        <SectionProvider>
          <LayoutContent>{children}</LayoutContent>
        </SectionProvider>
      </body>
    </html>
  );
}
