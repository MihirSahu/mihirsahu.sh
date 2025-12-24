"use client";

import Link from "next/link";
import { useState } from "react";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ml-1 inline-block"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Thinker({ className }: { className?: string }) {
  const asciiArt = `                        .::::..
                     .:       ...
                    :.          ....           ...
                   ..  .        :. ....:::::....  ..:
                   ..          .:.:.    ...  .....   .:.
                   .   ::   .-:. .:  .      . .         ::
                   .:.  ....       ..     .:       .     .:
                     .::..:. ..   .  ..  .:.       .   .  ..
                       .: .. .   :      ...       .   .    .:.
                        .:::::.......:..  .:      .  .:      .:
                        ...   .::.         :.        :. .      :
                        ..     ::...   ..  :.   ..  ..    ..   ..
                        .     ..:::        :        ..   ....:. ..
                        .    .:.. .:    . :.       ..  .   ..   .:
                        .. .. .:.   ::. . :.     . ..    .     ..:
                         .:    .:     ... .     .  :    ...  .   ..
                           :     .:.    :.:       :  .        .   :
                            : .    .:.  :.-.     :      .          :
                             :. .    :..:      . :       .....      :
                             .:. .   :.    ..  .:  ..  .... .::...  ..
                              .:. .:.  ..       ::.......::..       ..
                              ..:.  ..   ..  ...           .        ..
                          ....       ... ....                        ..
                        .:.        .:::...                     ..   ..
                       ..     .::.                                  ..
                      -      ..    .            ........            :
                      :..   .-.            ...                     .:   .:.
                      ::...:  ..            ::.      ............::        .::.
                      .:.........   .     .   .:::::..     ...................:.
                        :::::.   .:        ..   :.  ..... .    ...          .. :
                         .:.       .:.    .  ..  :   .::.   .           .... : :
                            :.   .   .-    ..  .. :. .   .. .      ....  .    :..
                             .:    ... .:     .. .... .::::.  . ..     ..    : ..
                               :.    .   .:.        .. :.   .   .:.      .   : ..
                                 .:.        :-.       :. :   ..   ..     ..  :  ..
                                    .:.      .::.    .... ..   ..:.      ...... ..
                                      .:.    . .-.     ......: ..  ..    .  ..  ...
                                        ..    .. :.     .   : ..  . .  .        ...:
                                          :       : ..      :  ...  .    .      .. ..
                                          ..  .  .:      ..:   . .  .::.        .. ..
                                          .  .   :       :.   ..  . .. .:      ..  :
                                          ..    .      .:    ..   : : ..      ..    :
                                          .. ......   ..   .:.   . :   :            ..
                                        .:. :... :.:.......       :    :  .. ..      .:.
                                        .::: .:::.  .....::::::::.     :  .....  . ..  :.
                                         ::         .         ..    . :. .           .. :
                                             ::...  ..        .    ....     ....... .  .:
                                                  .:::........::.    ............::::.
                                                               .......`;

  const lines = asciiArt.split("\n");

  return (
    <>
      <svg
        viewBox="0 0 1740 1800"
        className={className}
        aria-label="The Thinker"
      >
        <text
          style={{ fontFamily: "var(--font-berkeley-mono), monospace" }}
          fontSize="30"
          fontWeight="bold"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="5"
          xmlSpace="preserve"
        >
          {lines.map((line, i) => (
            <tspan key={i} x="0" dy={i === 0 ? "36" : "36"}>
              {line}
            </tspan>
          ))}
        </text>
      </svg>
      {/*<div className="text-center">[ The Thinker ]</div>
      <div className="text-center text-gray-600">
        <i>Auguste Rodin</i>
      </div>*/}
    </>
  );
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-12">
      <h2 className="mb-4 text-sm font-medium text-gray-500">{title}</h2>
      {children}
    </section>
  );
}

interface PreviousWorkProps {
  title: string;
  description: string;
}

function PreviousWork({ title, description }: PreviousWorkProps) {
  return (
    <div
      rel="noopener noreferrer"
      className="-mx-3 flex flex-col rounded-lg px-3 py-3 transition-colors hover:bg-gray-100/60"
    >
      <span className="font-medium">{title}</span>
      <span className="text-gray-600">{description}</span>
    </div>
  );
}

interface WritingLinkProps {
  href: string;
  title: string;
}

function WritingLink({ href, title }: WritingLinkProps) {
  return (
    <Link
      href={href}
      className="-mx-3 block rounded-lg px-3 py-2 transition-colors hover:bg-gray-100/60"
    >
      {title}
    </Link>
  );
}

interface SocialLinkProps {
  href: string;
  label: string;
}

function SocialLink({ href, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 transition-colors hover:text-foreground"
    >
      {label}
      <ArrowIcon />
    </a>
  );
}

export default function Home() {
  const [currentSection, setCurrentSection] = useState("Home");

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <span className="absolute right-4.5 origin-bottom-left -translate-y-full translate-x-full rotate-90 bg-[var(--background)]">
        [ {currentSection} ]
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

            {currentSection != "Home" && (
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

          {currentSection == "Today" && (
            <Section title="Today">
              <div className="space-y-5">
                <p className="leading-relaxed text-gray-900">
                  I'm a builder, tinkerer, and learner. I find joy in coming
                  across new ideas, meeting exceptional people, and making an
                  impact.
                </p>
                <p className="leading-relaxed text-gray-900">
                  I want to to help founders build well-crafted products that
                  inspire people and create companies that make an outsized
                  impact on the world.
                </p>
                <p className="leading-relaxed text-gray-900">
                  Currently, I build large-scale authentication systems at Visa.
                </p>
              </div>
            </Section>
          )}

          {currentSection == "Works" && (
            <Section title="Previous Work">
              <div className="flex flex-col">
                <PreviousWork
                  title="HCSS [Spring 2025]"
                  description="Built modern tools for the construction industry."
                />
                <PreviousWork
                  title="BidOut/Breaker19 [Internship] [Winter 2023]"
                  description="Built the Uber for oil & gas trucking."
                />
                <PreviousWork
                  title="Chevron [Internship] [Summer 2023-2024]"
                  description="2x internship for software engineering and project management."
                />
              </div>
            </Section>
          )}

          {currentSection == "Thoughts" && (
            <Section title="Thoughts">
              <div className="flex flex-col">[ In progress ]</div>
            </Section>
          )}

          {currentSection == "Contacts" && (
            <Section title="Connect">
              <div className="flex flex-col space-y-5">
                <div>
                  The best way to contact me is at mihir [at] mihirsahu.com. You
                  can also reach out via these channels:
                </div>
                <div className="flex gap-6">
                  <SocialLink href="https://x.com/TheMihirSahu" label="X" />
                  <SocialLink
                    href="https://www.linkedin.com/in/the-mihir-sahu/"
                    label="LinkedIn"
                  />{" "}
                  <SocialLink
                    href="https://github.com/mihirsahu"
                    label="GitHub"
                  />
                </div>
              </div>
            </Section>
          )}

          {currentSection == "Home" && (
            <div className="sticky top-24 shrink-0 lg:block justify-self-center">
              <Thinker className="h-[500px] w-auto text-foreground" />
            </div>
          )}

          {currentSection == "Home" && (
            <div>
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
        </main>
      </div>
    </div>
  );
}
