"use client";

import { useSection } from "../context/SectionContext";
import { useDeviceDetect } from "../hooks/useDeviceDetect";
import About from "./about";
import Companies from "./companies";
import Thoughts from "./thoughts";
// import Library from "./library";

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
      {currentSection === "About" && <About />}

      {currentSection === "Thoughts" && <Thoughts />}

      {/* {currentSection === "Library" && <Library />} */}

      {currentSection === "Companies" && <Companies />}

      {currentSection === "Home" && (
        <div
          className="sticky top-24 shrink-0 justify-self-center lg:block"
          data-nosnippet
        >
          <Thinker className="h-[500px] w-auto text-foreground" />
        </div>
      )}

      {currentSection === "Home" && (
        <div>
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
    </>
  );
}
