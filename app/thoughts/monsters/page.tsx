"use client";

import { useDeviceDetect } from "../../hooks/useDeviceDetect";

const Monsters = () => {
  const { isIOSMobile, isMobile } = useDeviceDetect();

  const monsterArt = `                    .... ..              ...
                  ..  .. ..          .....  .....
                .::....  ..          ..  .  .   ..
              .:-...     ..         ........  .....
             ... :  ..   ..         ...  ....:.....
            . ..:   ..   ..         ............  .....
           .....  . .    ..      ......  ........      ..
          ........ ..     ..  ...     ......:.:.......   .....
          .......  ..     .. ..      ...     ..........    .. ..
          .:..      ..     ...            ...  ...  .  .     .....
          .:.       ..     ..   ....              ..    :     ....
         .::.      ...:    .     .:. ..:::::.:     ...   .     ..... ....
         ....      . . :. ..  .. ..         .            ...  ....     . .
         ....    . . . .. ..     .     .    .   .. ....    .....    ..   ..
         ....    . .... ....     .....      .   ..............      .    ..
         .. .   . ... :  ...   ....   .         .        ..         :..   .
         .. .   .  ....   ..   ..  .        . ...       .          .:. .  ..
         .....   . .. ..  ..  ..        ...  . .      .            .   .. ..
         .....   .. .  :  ...          :....:. ..    ........      ......  ..
         ...      . ..... ...              ....:..               ....  ..  ..
         ...  .    ..  ..... .     .  ...:..                          .......
          . .  .   .. . .:.....   .. ..                         ....    ........
          ...   .   .. ....   .. ..   .                    ...  .....      ...  ...
           . .   .   .. ....    .      ...              :.           .  .  ..  ..  ..
            :..   . .. .. ..:.   .:.     ...         ..          ..   .. .    ..      ..
            ..     ....  ..  ...   ..                         ..       ...         ...   .:.
             ....   .. ..  ..  ...   ..                ......          .......  ....          .........:::
              ......  .. ..  .......  ...      .........               ...   ..............   .  .   ....
               .  ....  .. ....  .....   ......                        .      .    ...........    .....
                .. .....  .. ....:.   ...                              .  ..   ......:.    ..   ...
                  .:..: ..   .. ..  .:..  ..                            ....     ..         .:.
                    .:......    . ...      ...::...
                             .....   ..:.....        ...
                                 ......     .:..........
                                      .........`;

  // Simplified version for small iOS screens (less leading whitespace)
  const monsterArtIOS = `          .... ..              ...
        ..  .. ..          .....  .....
      .::....  ..          ..  .  .   ..
    .:-...     ..         ........  .....
   ... :  ..   ..         ...  ....:.....
  . ..:   ..   ..         ............  .....
 .....  . .    ..      ......  ........      ..
........ ..     ..  ...     ......:.:.......   .....
.......  ..     .. ..      ...     ..........    .. ..
.:..      ..     ...            ...  ...  .  .     .....
.:.       ..     ..   ....              ..    :     ....
.::.      ...:    .     .:. ..:::::.:     ...   .     ..... ....
....      . . :. ..  .. ..         .            ...  ....     . .
....    . . . .. ..     .     .    .   .. ....    .....    ..   ..
....    . .... ....     .....      .   ..............      .    ..
.. .   . ... :  ...   ....   .         .        ..         :..   .
.. .   .  ....   ..   ..  .        . ...       .          .:. .  ..
.....   . .. ..  ..  ..        ...  . .      .            .   .. ..
.....   .. .  :  ...          :....:. ..    ........      ......  ..
...      . ..... ...              ....:..               ....  ..  ..
...  .    ..  ..... .     .  ...:..                          .......
 . .  .   .. . .:.....   .. ..                         ....    ........
 ...   .   .. ....   .. ..   .                    ...  .....      ...  ...
  . .   .   .. ....    .      ...              :.           .  .  ..  ..  ..
   :..   . .. .. ..:.   .:.     ...         ..          ..   .. .    ..      ..
   ..     ....  ..  ...   ..                         ..       ...         ...   .:.
    ....   .. ..  ..  ...   ..                ......          .......  ....          .........:::
     ......  .. ..  .......  ...      .........               ...   ..............   .  .   ....
      .  ....  .. ....  .....   ......                        .      .    ...........    .....
       .. .....  .. ....:.   ...                              .  ..   ......:.    ..   ...
         .:..: ..   .. ..  .:..  ..                            ....     ..         .:.
           .:......    . ...      ...::...
                    .....   ..:.....        ...
                        ......     .:..........
                             .........`;

  const monsterLines = monsterArt.split("\n");
  const monsterLinesiOS = monsterArtIOS.split("\n");

  return (
    <div className="sticky top-24 shrink-0 lg:block justify-self-center">
      {/* iOS Mobile */}
      {isIOSMobile && (
        <svg
          viewBox="0 0 2200 1400"
          className="h-[500px] w-auto text-foreground"
          aria-label="Monster"
        >
          <text
            style={{
              fontFamily: "var(--font-berkeley-mono), monospace",
              letterSpacing: "5px",
            }}
            fontSize="30"
            fontWeight="bold"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="5"
            xmlSpace="preserve"
          >
            {monsterLinesiOS.map((line, i) => (
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
          viewBox="0 0 2500 1400"
          className="h-[500px] w-auto text-foreground"
          aria-label="Monster"
        >
          <text
            style={{
              fontFamily: "var(--font-berkeley-mono), monospace",
              letterSpacing: "5px",
            }}
            fontSize="30"
            fontWeight="bold"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="5"
            xmlSpace="preserve"
          >
            {monsterLines.map((line, i) => (
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
          viewBox="0 0 2500 1400"
          className="h-[500px] w-auto text-foreground"
          aria-label="Monster"
        >
          <text
            style={{
              fontFamily: "var(--font-berkeley-mono), monospace",
              letterSpacing: "5px",
            }}
            fontSize="30"
            fontWeight="bold"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="5"
            xmlSpace="preserve"
          >
            {monsterLines.map((line, i) => (
              <tspan key={i} x="0" dy={i === 0 ? "36" : "36"}>
                {line}
              </tspan>
            ))}
          </text>
        </svg>
      )}
      <div className="text-center">[ Monsters ]</div>
      <div className="text-center text-gray-600">
        <i>
          Is every moment, second, minute and day of yours really doing anything
          for you to get closer to becoming the best?
        </i>
      </div>
    </div>
  );
};

export default Monsters;
