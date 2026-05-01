"use client";

import { useDeviceDetect } from "../../hooks/useDeviceDetect";

const paragraphs = [
  "Most products are built to work. In a time when software is malleable, this is the bare minimum. Few products are built to be felt. When software becomes commoditized, craft becomes the true differentiator. The teams that focus on functionality and feel are the ones that win and make a profound impact on the world.",
  "Craft is the marriage between the depth of thought and the execution of a product. It encompasses design, aesthetics, feel, and functionality. Parts of it can be seen as optional during new waves of innovation. In the 1990s, making software work was hard enough that most teams favored new features over refinement. The teams that were capable enough of producing a well-crafted product — both in terms of functionality and feel — built the companies we know today. Google, for example, paired its PageRank algorithm with a minimal interface — just a search bar and two buttons. It radiated purpose. Craft is not just the visual aspect of a product — it's the functionality and feel. It's a thread that must be woven into all aspects of the user experience.",
  "Craft is inspiration. It's an act of love. Just as those who came before us passionately built cathedrals that now leave us in awe, the products we build will show other craftsmen what's possible. Our craft will blend with that of others and develop the taste of the next craftsman. And after all, taste is what makes us human.",
];

const monaLisaArt = `                                                .::..
                                          .::::...::..:.::.
                                       .=:. .. .....  .:. ..:
                                      :... ..    .....    .   :
                                    ...:..        ...  .    .  .
                                   ..::.             :-      .....
                                   -.                  ..:.   .:..
                                 ..:-                   .:...  .:.-
                                ..::.                    :-...   ...
                               . ::.                     .:::.. .. -
                               . ::.             ...      ..:.-.  .:
                               . -::..:--:.  ....:+::.    ..::::  : .
                               .:::   .....      ...       ..:::.   :
                              . :::.                      .:.:: .. :-
                              . .-::                      .:::..  . =
                             .  :::.:                     .:.::.... -
                              . :.: :     . .:.           .. ::::. . .
                              -. -:::.                    .. .:::    :
                              :: ::::.   ........         .:..:: .  . .
                              ..::: ..:    .::            .:.... .  . :
                              . ...:..:.:               ....  . ..  . :
                              . .:: ... ..:      ..   :   .::::::   . :
                               :..::.... ...--:::::.       ::::.:  .  :
                                : :.:.... ..:.              .:::. .  .-
                                 ::.::::   .               .:..::.-  :.:
                                .::.:::.  ..:-              :::-::.  :  :
                                - :::..  .:.                 :-::..  .  :.
                                . :::..:.                    :-:: . :   ...
                               -. ::.::                     .::.: : :     ..
                              : .  :.:.                      :..- :.   .    ..
                            .::  ..::.                      .:.:: .:  :......:-.
                          .. . .:  .-.                     .. ..::-.::.....  ...:.
                        ..... ..:  .                        ..:::...       ...  .:::
                       .......:=-                         .:....        .......    .:.
                      :......::---.                      .:...     ....   .....::.   .:.
                    .:.   ...::::----:...              .:..      ......::. . .  ...    ..
                   :.....  .::::::---------:....    ..:.. ....   .:.  ::.  .  .  .      .
                  : :.  .  .:...:.::::::------------:... .. .::: . . .::. .   .  ..      :
                  :..   .  :::.:  ::-:.::::..:::.--.. .. ..:...   : .-.......:::..  .    ..
                  :..      :: . .. . .. . .. .:.=. ..  ...: .    :  : :..      .  .-..   ..
                  -:   .   :: .  .  .:..:. ....:  . .. .:: ..   . ..... ..    .  :  :..   :.
                 ::        .:.. . : :. ..::.:=. ...  .:.. ..  .  . : ..    . .-.    ...   ...
                ...:       .... . . :. :.   .  .   . .:  ..  .. . :  .    .:  .      :.    :.
               :. :        .:.     .      .. .   . : -  ..  ..   ..      .    .      . .   ...
             :. :     ...  .. .    .  .. ..    .  . :  .   ..  . .  .  ..     .       .     ..
           ....   .......   . :  . :  :... .    . :.  .     . :: . . :.               .      ..
         .......    ...... .: .  . .  ...     .  :           .: .  -                  .      ..
      .:...   .         .....      .  ...   .  ..    .       :.. .-                  .        .
     .:..  ...      .       .-..   .  .....   .     .   .   .:  ...            ..    .        ..
    .:.......:::::::::::. .. . .  .. .-.    ..     .   .    :..: :           .     .    ..     .
    :... ...:-::........::. ..    ....   ..      ..   .      .:  :      ...                    .
   .     .:::..  ...::...:::::  . ...           .          .:.   :  ...  ......         ..      .
   :     ::... .:. .:::::..:-=-...::.                      :-.   -..                      ...   :
  :.   .:::. ..:. .. ....:--.        ......              . ..   .:.      .                   .  .
 ...  .......::. :: .....:-.              ...           .  .. ..  . ...  ..........              .
 : .  .  ....  . .: :.. :-.                  ::...         .      :                 ..           :
 : .  .   ..   .  :... ..-:                    ...:::.     ..     :.::::::...   . ...        .   :
 ...  .    .....  ..     :=:                      ..:- ..::::::.......... .. ..      ..      ..  :
  :  ..     .::... .  . ...:=+=:              :.    .:......:....... . ..    ....             .  :
 :      .       :::.....::::    :              :.:.    :...  .... .     .     .....     .     :. :
.      .               ..   .     :        .:.   :. :   :: . . . .  .          ...       .    :. .
        ..  .....     .:  ..        :   ..   .-. . :. .:.:- . . .              . .       .   .. ..
      ..              .. ..  .       .:   ..   .=.   ..     . .  .  :     ..   . .       . ...  ..
     ..   ...     :  :....  . .        .:   .:    -=  .:      .     :     .:  .  :   .  . .:    ..
           ..:::   ... ..... :   :::::.    ::::-:.: :==:..   .            ..    :   .  ::.     ...
          ......  . .   ::::.  .=            .....:::...:::::::::        :.   :::--::-. .       ..
               ..   :     :-. ::..  .......                            .:::.         .  :        :
                   .       :. :..- .............................::::.                .  ..    .  :
         .    .   .   ..    ::    :::::::::::::::::-:....                   ..       .   .       :
   ...      .     ..                 . .   ..       .    ..    .            ..        .  .       ..
          ..     .                    . .            :    ..                ..        .  .        :
         ..     .                   ..  .:..                   .            ..        .  .        ..
         .    ..                   .         .                 .            ..        .            :
        .    .                                       .    ..    .            .       :             .`;

const caption = "The world is a museum of passion projects. - Patrick Collison";

export default function Craft() {
  const { isIOSMobile, isMobile } = useDeviceDetect();
  const monaLisaLines = monaLisaArt.split("\n");

  return (
    <article className="max-w-3xl space-y-8 leading-7">
      <header className="space-y-3">
        {isIOSMobile && (
          <svg
            viewBox="0 0 1900 2700"
            className="mx-auto h-auto w-full max-w-md text-foreground"
            aria-label="Mona Lisa-inspired portrait"
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
              {monaLisaLines.map((line, i) => (
                <tspan key={i} x="0" dy={i === 0 ? "36" : "36"}>
                  {line}
                </tspan>
              ))}
            </text>
          </svg>
        )}

        {isMobile && !isIOSMobile && (
          <svg
            viewBox="0 0 1900 2700"
            className="mx-auto h-auto w-full max-w-md text-foreground"
            aria-label="Mona Lisa-inspired portrait"
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
              {monaLisaLines.map((line, i) => (
                <tspan key={i} x="0" dy={i === 0 ? "36" : "36"}>
                  {line}
                </tspan>
              ))}
            </text>
          </svg>
        )}

        {!isMobile && (
          <svg
            viewBox="0 0 1900 2700"
            className="mx-auto h-[520px] w-auto text-foreground"
            aria-label="Mona Lisa-inspired portrait"
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
              {monaLisaLines.map((line, i) => (
                <tspan key={i} x="0" dy={i === 0 ? "36" : "36"}>
                  {line}
                </tspan>
              ))}
            </text>
          </svg>
        )}

        <h1 className="text-base font-normal">[ Craft ]</h1>
        <p className="text-gray-600">
          <i>{caption}</i>
        </p>
      </header>

      <div className="space-y-6">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
