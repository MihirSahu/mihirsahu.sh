"use client";

import Link from "next/link";
import { useSection } from "./context/SectionContext";
import { useDeviceDetect } from "./hooks/useDeviceDetect";
import Today from "./components/today";
import Works from "./components/works";
import Thoughts from "./components/thoughts";
import Contacts from "./components/contacts";
import Companies from "./components/companies";

function Thinker({ className }: { className?: string }) {
  const { isIOSMobile, isMobile } = useDeviceDetect();

  const asciiArt = `                        .::::.
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
                      .:.........   .     .   .:::::..     ...................:
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

  // Simplified version for small iOS screens (less leading whitespace)
  const asciiArtIOS = `              .::::.
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
            .:.........   .     .   .:::::..     ...................:
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
  const linesiOS = asciiArtIOS.split("\n");

  return (
    <>
      {/* iOS Mobile */}
      {isIOSMobile && (
        <svg
          viewBox="0 0 1400 1800"
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
            {linesiOS.map((line, i) => (
              <tspan key={i} x="0" dy={i === 0 ? "36" : "36"}>
                {line}
              </tspan>
            ))}
          </text>
        </svg>
      )}

      {/* Android Mobile */}
      {isMobile && !isIOSMobile && (
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
      )}

      {/* Desktop */}
      {!isMobile && (
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
      )}
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
