import Section from "./section";
import ArrowIcon from "./arrow";

interface WorksProps {
  name: string;
  description: string;
  url: string;
}

const CompaniesTemplate = ({ name, description, url }: WorksProps) => {
  return (
    <a
      rel="noopener noreferrer"
      className="-mx-3 flex flex-col rounded-lg px-3 py-3 transition-colors hover:bg-gray-100/60"
      href={url}
      target="_blank"
    >
      <div className="font-medium">
        {name} <ArrowIcon />
      </div>
      <span className="text-gray-600">{description}</span>
    </a>
  );
};

const Companies = () => {
  return (
    <Section title="Tools">
      <div className="flex flex-col">
        <CompaniesTemplate
          name="Granola"
          description="AI Note Taker"
          url="https://www.granola.ai/"
        />
        <CompaniesTemplate
          name="Zed"
          description="Minimal Code Editor"
          url="https://zed.dev/"
        />
        <CompaniesTemplate
          name="Obsidian"
          description="Note Taking Tool"
          url="https://obsidian.md/"
        />
        <CompaniesTemplate
          name="Copilot Money"
          description="Exceptionally Designed Financial Tool"
          url="https://www.copilot.money/"
        />
        <CompaniesTemplate
          name="Retro"
          description="Photo Journal Social App"
          url="https://retro.app/"
        />
        <CompaniesTemplate
          name="Flighty"
          description="The Everything Flights App"
          url="https://flighty.com/"
        />
        <CompaniesTemplate
          name="Codex"
          description="AI Coding Agent"
          url="https://chatgpt.com/codex/"
        />
        <CompaniesTemplate
          name="Coast"
          description="Local Memory for Your Computer"
          url="https://coast.app/"
        />
        <CompaniesTemplate
          name="Handy"
          description="Local Speech-to-Text"
          url="https://handy.computer/"
        />
        <CompaniesTemplate
          name="Paper"
          description="Canvas for Product Design"
          url="https://paper.design/"
        />
        <CompaniesTemplate
          name="Mobbin"
          description="Mobile Design Reference Library"
          url="https://mobbin.com/discover/apps/ios/latest"
        />
      </div>
    </Section>
  );
};

export default Companies;
