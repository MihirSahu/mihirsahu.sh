import Section from "./section";
import ArrowIcon from "./arrow";

interface BuildProps {
  name: string;
  description: string;
  url?: string;
  status?: string;
}

const BuildTemplate = ({ name, description, url, status }: BuildProps) => {
  const content = (
    <>
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-medium">
        <span>
          {name} {url && <ArrowIcon />}
        </span>
        {status && (
          <span className="rounded border border-gray-400/40 px-1.5 py-0.5 text-[10px] font-normal uppercase leading-none text-gray-500">
            {status}
          </span>
        )}
      </div>
      <span className="text-gray-600">{description}</span>
    </>
  );

  if (!url) {
    return (
      <div className="-mx-3 flex flex-col rounded-lg px-3 py-3">{content}</div>
    );
  }

  return (
    <a
      rel="noopener noreferrer"
      className="-mx-3 flex flex-col rounded-lg px-3 py-3 transition-colors hover:bg-gray-100/60"
      href={url}
      target="_blank"
    >
      {content}
    </a>
  );
};

const Builds = () => {
  return (
    <Section title="Builds">
      <div className="flex flex-col">
        <BuildTemplate
          name="Cardverse"
          description="Browse popular US credit cards and compare rewards, fees, and terms"
          url="https://cardverse.mihirsahu.sh/"
        />
        <BuildTemplate
          name="Cherbi"
          description="Native iPhone AI recipe journal that turns messy cooking notes into structured recipes with generated watercolor art"
        />
        <BuildTemplate
          name="Ledger"
          description="Native iOS daily note app with local-first Markdown notes and manual sync to a private S3 bucket"
          url="https://github.com/MihirSahu/Ledger"
        />
        <BuildTemplate
          name="Latia"
          description="Side-panel Chrome extension for asking questions about the current page with any OpenAI-compatible model endpoint"
          url="https://github.com/MihirSahu/Latia"
        />
        <BuildTemplate
          name="Mnemonic"
          description="Self-hosted, Markdown-backed MCP memory server for sharing durable context across AI apps"
          url="https://github.com/MihirSahu/Mnemonic"
        />
        <BuildTemplate
          name="Conduit"
          description="TypeScript workspace for calling the Codex backend with a ChatGPT Plus or Pro subscription"
          url="https://github.com/MihirSahu/conduit"
        />
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
          name="Chat Minimap"
          description="React library for turn-aware navigation in long AI chats"
          url="https://chat-minimap.vercel.app/"
        />
        <BuildTemplate
          name="Claude Export"
          description="Export Claude conversations"
          url="https://claude-export.mihirsahu.sh/"
        />
        <BuildTemplate
          name="IRC GPT"
          description="A Y2K-inspired, IRC-shaped desktop chat client for local-first AI conversations"
          url="https://irc-gpt-showcase.mihirsahu.sh/"
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
