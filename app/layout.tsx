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
            <p className="text-gray-600">Builder</p>
            <div className="flex gap-3 mt-1">
              <a
                href="https://x.com/TheMihirSahu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-foreground transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/the-mihir-sahu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-foreground transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                </svg>
              </a>
              <a
                href="https://github.com/mihirsahu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-foreground transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>

            {currentSection != "Home" && pathname === "/" && (
              <div className="flex flex-col md:flex-row justify-between pt-5">
                <div
                  className="cursor-pointer"
                  onClick={() => setCurrentSection("About")}
                >
                  [ About ]
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() => setCurrentSection("Thoughts")}
                >
                  [ Thoughts ]
                </div>
                {/* <div
                  className="cursor-pointer"
                  onClick={() => setCurrentSection("Library")}
                >
                  [ Library ]
                </div> */}
                <div
                  className="cursor-pointer"
                  onClick={() => setCurrentSection("Companies")}
                >
                  [ Companies ]
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
