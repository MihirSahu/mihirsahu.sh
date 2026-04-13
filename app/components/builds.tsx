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
          name="Claude Export"
          description="Export Claude Conversations"
          url="https://claude-export.mihirsahu.sh/"
        />
      </div>
    </Section>
  );
};

export default Builds;
