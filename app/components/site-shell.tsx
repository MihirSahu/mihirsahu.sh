"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { SectionProvider, useSection } from "../context/SectionContext";

function LayoutContent({ children }: { children: ReactNode }) {
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
            <div className="mt-1 flex flex-wrap items-center gap-3">
              <a
                href="https://x.com/TheMihirSahu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-foreground"
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
                className="text-gray-500 transition-colors hover:text-foreground"
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
                className="text-gray-500 transition-colors hover:text-foreground"
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
              <a
                href="https://chatgpt.com/u/themihirsahu"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ChatGPT profile"
                className="text-gray-500 transition-colors hover:text-foreground"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  fillRule="evenodd"
                  aria-hidden="true"
                >
                  <path d="M9.205 8.658v-2.26c0-.19.072-.333.238-.428l4.543-2.616c.619-.357 1.356-.523 2.117-.523 2.854 0 4.662 2.212 4.662 4.566 0 .167 0 .357-.024.547l-4.71-2.759a.797.797 0 00-.856 0l-5.97 3.473zm10.609 8.8V12.06c0-.333-.143-.57-.429-.737l-5.97-3.473 1.95-1.118a.433.433 0 01.476 0l4.543 2.617c1.309.76 2.189 2.378 2.189 3.948 0 1.808-1.07 3.473-2.76 4.163zM7.802 12.703l-1.95-1.142c-.167-.095-.239-.238-.239-.428V5.899c0-2.545 1.95-4.472 4.591-4.472 1 0 1.927.333 2.712.928L8.23 5.067c-.285.166-.428.404-.428.737v6.898zM12 15.128l-2.795-1.57v-3.33L12 8.658l2.795 1.57v3.33L12 15.128zm1.796 7.23c-1 0-1.927-.332-2.712-.927l4.686-2.712c.285-.166.428-.404.428-.737v-6.898l1.974 1.142c.167.095.238.238.238.428v5.233c0 2.545-1.974 4.472-4.614 4.472zm-5.637-5.303l-4.544-2.617c-1.308-.761-2.188-2.378-2.188-3.948A4.482 4.482 0 014.21 6.327v5.423c0 .333.143.571.428.738l5.947 3.449-1.95 1.118a.432.432 0 01-.476 0zm-.262 3.9c-2.688 0-4.662-2.021-4.662-4.519 0-.19.024-.38.047-.57l4.686 2.71c.286.167.571.167.856 0l5.97-3.448v2.26c0 .19-.07.333-.237.428l-4.543 2.616c-.619.357-1.356.523-2.117.523zm5.899 2.83a5.947 5.947 0 005.827-4.756C22.287 18.339 24 15.84 24 13.296c0-1.665-.713-3.282-1.998-4.448.119-.5.19-.999.19-1.498 0-3.401-2.759-5.947-5.946-5.947-.642 0-1.26.095-1.88.31A5.962 5.962 0 0010.205 0a5.947 5.947 0 00-5.827 4.757C1.713 5.447 0 7.945 0 10.49c0 1.666.713 3.283 1.998 4.448-.119.5-.19 1-.19 1.499 0 3.401 2.759 5.946 5.946 5.946.642 0 1.26-.095 1.88-.309a5.96 5.96 0 004.162 1.713z" />
                </svg>
              </a>
              <a
                href="/rss.xml"
                aria-label="RSS feed"
                className="text-gray-500 transition-colors hover:text-foreground"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3 3C12.9411 3 21 11.0589 21 21H18C18 12.7157 11.2843 6 3 6V3ZM3 10C9.07513 10 14 14.9249 14 21H11C11 16.5817 7.41828 13 3 13V10ZM3 17C5.20914 17 7 18.7909 7 21H3V17Z" />
                </svg>
              </a>
            </div>

            {currentSection !== "Home" && pathname === "/" && (
              <div className="flex flex-col justify-between pt-5 md:flex-row">
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
                <div
                  className="cursor-pointer"
                  onClick={() => setCurrentSection("Builds")}
                >
                  [ Builds ]
                </div>
                {/* <div
                  className="cursor-pointer"
                  onClick={() => setCurrentSection("Library")}
                >
                  [ Library ]
                </div> */}
                <div
                  className="cursor-pointer"
                  onClick={() => setCurrentSection("Tools")}
                >
                  [ Tools ]
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

export default function SiteShell({ children }: { children: ReactNode }) {
  return (
    <SectionProvider>
      <LayoutContent>{children}</LayoutContent>
    </SectionProvider>
  );
}
