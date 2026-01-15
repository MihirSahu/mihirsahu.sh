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
    <Section title="Watchlist">
      <div className="flex flex-col">
        <CompaniesTemplate
          name="Granola"
          description="AI Note Taker"
          url="https://www.granola.ai/"
        />
        <CompaniesTemplate
          name="Exa"
          description="Search Built for AI"
          url="https://exa.ai/"
        />
        <CompaniesTemplate
          name="Wispr Flow"
          description="AI-based Voice-to-Text"
          url="https://wisprflow.ai/"
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
          name="Conductor"
          description="Orchestration Tool for Coding Agents"
          url="https://conductor.build/"
        />
        <CompaniesTemplate
          name="Lazy"
          description="Capture Tool for Knowledge"
          url="https://lazy.so/"
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
          name="BrowserBase"
          description="Web Browser for AI Agents"
          url="https://www.browserbase.com/"
        />
      </div>
    </Section>
  );
};

export default Companies;
