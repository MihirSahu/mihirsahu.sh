import Section from "./section";
import ArrowIcon from "./arrow";

interface BuildProps {
  name: string;
  description: string;
  url: string;
}

const BuildTemplate = ({ name, description, url }: BuildProps) => {
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

const Builds = () => {
  return (
    <Section title="Builds">
      <div className="flex flex-col">
        <BuildTemplate
          name="Lattice"
          description="Web UI for grounded retrieval over an S3-backed Obsidian vault"
          url="https://lattice-showcase.mihirsahu.sh/"
        />
        <BuildTemplate
          name="Daily Schedule Checklist"
          description="Daily routine tracker with schedule types, streaks, and Obsidian export"
          url="https://agenda-showcase.mihirsahu.sh/"
        />
        <BuildTemplate
          name="Claude Export"
          description="Export Claude Conversations"
          url="https://claude-export.mihirsahu.sh/"
        />
        <BuildTemplate
          name="Linear Calendar Webhook"
          description="Webhook showcase for syncing Linear issues to a calendar"
          url="https://linear-calendar-webhook-showcase.mihirsahu.sh/"
        />
      </div>
    </Section>
  );
};

export default Builds;
