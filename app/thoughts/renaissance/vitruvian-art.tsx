import { vitruvianLines } from "./vitruvian-data";

export default function VitruvianArt() {
  return (
    <svg
      viewBox="0 0 876 876"
      className="mx-auto h-auto w-full max-w-lg text-foreground md:h-[520px] md:w-auto md:max-w-none"
      role="img"
      aria-label="Vitruvian Man in ASCII, with two poses inside a circle and square"
      data-nosnippet
    >
      <title>Vitruvian Man — an ASCII study after Leonardo da Vinci</title>
      <text
        style={{ fontFamily: "var(--font-berkeley-mono), monospace" }}
        fontSize="10"
        fontWeight="bold"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.45"
        xmlSpace="preserve"
        aria-hidden="true"
      >
        {vitruvianLines.map((line, index) => (
          <tspan key={index} x="6" y={12 + index * 12}>
            {line}
          </tspan>
        ))}
      </text>
    </svg>
  );
}
