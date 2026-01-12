const Monsters = () => {
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

  const monsterLines = monsterArt.split("\n");

  return (
    <div className="sticky top-24 shrink-0 lg:block justify-self-center">
      <svg
        viewBox="-500 0 2500 1400"
        className="md:hidden h-[500px] w-auto text-foreground"
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
      <svg
        viewBox="0 0 2500 1400"
        className="hidden md:block h-[500px] w-auto text-foreground"
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
