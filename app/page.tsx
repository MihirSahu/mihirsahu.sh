"use client";

import Link from "next/link";
import { useSection } from "./context/SectionContext";
import Today from "./components/today";
import Works from "./components/works";
import Thoughts from "./components/thoughts";
import Contacts from "./components/contacts";
import Companies from "./components/companies";

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

export default function Home() {
  const { currentSection, setCurrentSection } = useSection();

  return (
    <>
      {currentSection == "Today" && <Today />}

      {currentSection == "Works" && <Works />}

      {currentSection == "Thoughts" && <Thoughts />}

      {currentSection == "Companies" && <Companies />}

      {currentSection == "Contact" && <Contacts />}

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
            onClick={() => setCurrentSection("Companies")}
          >
            [ Companies ]
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setCurrentSection("Contacts")}
          >
            [ Contacts ]
          </div>
        </div>
      )}
    </>
  );
}
