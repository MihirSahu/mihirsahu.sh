"use client";

import { useDeviceDetect } from "../../hooks/useDeviceDetect";

const Agency = () => {
  const { isIOSMobile, isMobile } = useDeviceDetect();

  const appleArt = `                       :     : .  :    :.  ..::.:  ..:::...:.      .   :::
                       .   .::...:   :  .:.::.:::::.....   :       :::.
                        :  ..:::   .:.  :::: . .         .    .   .:.
                          .:::.  . ..  ::.. :     .    :    .  .:;:
                             :  . :::.   ..        .:     .  :..:.
                             :.  ;:                     .  ..::.  .:::. . :.
                             : ::                     .   .:;:.:.:::::::::..::.
                           .. ::                    .  .:::.      .:.::.. :::.:.
                          . :;.                  ..  .:::           :::... .:::.
                         . :;                 .:.  ::::                 ::;:. ;;:
                        . ;;              .:..:  .:;:                        .;::
                      : .::           ..     ..::;;.                            ::
                       .;:       .       .:::;:::.
                   .  :;;:.        .::.::;::.
                :.   .          :.  :;;:.
            ..          ..:::::::;;;.:.
        ..   .   .:.. .:::::;::     .: :
    ..   .    ..::::::;::             ::
..        ... ::::::.            ..:::.:;::.       ::.
       ...::::::.           ...   .::::;:;::::   ......:
    ..::::;::             :      ..   ..        .  .:::...
 .::;::::.              ..   .   . ..: ...           .::...
;::;;:                 ::. .                          ..:::
:;:                   :::..                            .::.
                      :..  .:.                          .:.:
                      :...::.                          ..:.:
                      .... .                           ..: :
                      : :. .                           ... :.:
                      :... ..                         .....:  .
                   .:::. .. .                         ..  ::   .
                  .   :::....                       .... .;:
                  ...    :.......                 .....  ::.     .
                   .:     .::.....           ......... .:;:..     :
                    .:.   :. .::.:.. . ......:.:::.::. :  ::::     :
                    .:.   :.   :::...:.:...:.:::::.:..:    :::      .
                      ;   ..    ::.::::::::::::::::.:.      ;:.      .
                      .:  .:     ; ::::: ::;;;:::;:          ;.        :
                        .  :     ;;;;;;+;;;:                  ::.       ..
                        .   :   . .;;;:;:::::::.              .:. ...    ..
                         :  .:     .::;+;;:;:::.::::..      ..:          ..
                          .. .:.      .:;::::;::.....::::....               .
                            :..:.       ::::....::....: :                    :
                                :::.            .::.                          .:
                                    .::.         .      .                    .::.
                                        :::..                         .      .:::
                                            ;;::::.                          .     :
                                                  :::::.                             ..
                                                        ::::::::::...:                  ..`;

  // Simplified/cropped version for small iOS screens
  const appleArtIOS = `           :     : .  :    :.  ..::.:  ..:::...:.      .   :::
           .   .::...:   :  .:.::.:::::.....   :       :::.
            :  ..:::   .:.  :::: . .         .    .   .:.
              .:::.  . ..  ::.. :     .    :    .  .:;:
                 :  . :::.   ..        .:     .  :..:.
                 :.  ;:                     .  ..::.  .:::. . :.
                 : ::                     .   .:;:.:.:::::::::..::.
               .. ::                    .  .:::.      .:.::.. :::.:.
              . :;.                  ..  .:::           :::... .:::.
             . :;                 .:.  ::::                 ::;:. ;;:
            . ;;              .:..:  .:;:                        .;::
          : .::           ..     ..::;;.                            ::
           .;:       .       .:::;:::.
       .  :;;:.        .::.::;::.
    :.   .          :.  :;;:.
..          ..:::::::;;;.:.
    .   .:.. .:::::;::     .: :
.    ..::::::;::             ::
    ... ::::::.            ..:::.:;::.       ::.
  ...::::::.           ...   .::::;:;::::   ......:
..::::;::             :      ..   ..        .  .:::...
;::::.              ..   .   . ..: ...           .::...
;:                 ::. .                          ..:::
                  :::..                            .::.
                  :..  .:.                          .:.:
                  :...::.                          ..:.:
                  .... .                           ..: :
                  : :. .                           ... :.:
                  :... ..                         .....:  .
               .:::. .. .                         ..  ::   .
              .   :::....                       .... .;:
              ...    :.......                 .....  ::.     .
               .:     .::.....           ......... .:;:..     :
                .:.   :. .::.:.. . ......:.:::.::. :  ::::     :
                .:.   :.   :::...:.:...:.:::::.:..:    :::      .
                  ;   ..    ::.::::::::::::::::.:.      ;:.      .
                  .:  .:     ; ::::: ::;;;:::;:          ;.        :
                    .  :     ;;;;;;+;;;:                  ::.       ..
                    .   :   . .;;;:;:::::::.              .:. ...    ..
                     :  .:     .::;+;;:;:::.::::..      ..:          ..
                      .. .:.      .:;::::;::.....::::....               .
                        :..:.       ::::....::....: :                    :
                            :::.            .::.                          .:
                                .::.         .      .                    .::.
                                    :::..                         .      .:::
                                        ;;::::.                          .     :
                                              :::::.                             ..
                                                    ::::::::::...:                  ..`;

  const appleLines = appleArt.split("\n");
  const appleLinesiOS = appleArtIOS.split("\n");

  return (
    <div className="sticky top-24 shrink-0 lg:block justify-self-center">
      {/* iOS Mobile */}
      {isIOSMobile && (
        <svg
          viewBox="0 0 1400 1800"
          className="h-[500px] w-auto text-foreground"
          aria-label="Hand picking an apple"
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
            {appleLinesiOS.map((line, i) => (
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
          className="h-[500px] w-auto text-foreground"
          aria-label="Hand picking an apple"
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
            {appleLines.map((line, i) => (
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
          className="h-[500px] w-auto text-foreground"
          aria-label="Hand picking an apple"
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
            {appleLines.map((line, i) => (
              <tspan key={i} x="0" dy={i === 0 ? "36" : "36"}>
                {line}
              </tspan>
            ))}
          </text>
        </svg>
      )}
      <div className="text-center">[ Agency ]</div>
      <div className="text-center text-gray-600">
        <i>You can just do things</i>
      </div>
    </div>
  );
};

export default Agency;
