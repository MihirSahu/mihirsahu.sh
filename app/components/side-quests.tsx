import Section from "./section";
import ArrowIcon from "./arrow";

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center whitespace-nowrap text-gray-600 transition-colors hover:text-foreground"
    >
      {children}
      <ArrowIcon />
    </a>
  );
}

const currently = [
  "Reading through a lot of codebases and learning how to build harnesses",
  "Learning how to dance (bachata, salsa)",
];

const SideQuests = () => {
  return (
    <Section title="Side Quests">
      <div className="space-y-8">
        <div>
          <h3 className="mb-3 text-sm font-medium text-gray-500">Currently</h3>
          <ul className="list-disc space-y-3 pl-5 text-gray-900">
            {currently.map((item) => (
              <li key={item} className="leading-relaxed">
                {item}
              </li>
            ))}
            <li className="leading-relaxed">
              Bouldering at{" "}
              <ExternalLink href="https://boulderingproject.com/location/springdale/">
                Austin Bouldering Project Springdale
              </ExternalLink>
            </li>
            <li className="leading-relaxed">
              Vibing at the{" "}
              <ExternalLink href="https://switchyards.com/">
                Austin Hyde Park Switchyards
              </ExternalLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-medium text-gray-500">Previously</h3>
          <ul className="list-disc space-y-3 pl-5 text-gray-900">
            <li className="leading-relaxed">
              Beta tested the{" "}
              <ExternalLink href="https://www.granola.ai/">
                Granola
              </ExternalLink>{" "}
              iOS app before launch
            </li>
            <li className="leading-relaxed">
              Got funding for a{" "}
              <ExternalLink href="https://unison.so/">
                personal CRM
              </ExternalLink>{" "}
              with friends
            </li>
            <li className="leading-relaxed">
              Skateboarded and ate a lot of dirt
            </li>
            <li className="leading-relaxed">
              Did some{" "}
              <ExternalLink href="https://en.wikipedia.org/wiki/Cardistry">
                cardistry
              </ExternalLink>
            </li>
            <li className="leading-relaxed">
              Did{" "}
              <ExternalLink href="https://tryhackme.com/p/TheOnlyOnzz">
                CTFs
              </ExternalLink>{" "}
              and broke stuff
            </li>
            <li className="leading-relaxed">
              President of the largest{" "}
              <ExternalLink href="https://cougarcs.com/">
                CS student org
              </ExternalLink>{" "}
              at my uni
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default SideQuests;
