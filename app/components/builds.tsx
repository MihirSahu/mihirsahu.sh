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
      <div className="-mx-3 flex flex-col rounded-lg px-3 py-3">
        {content}
      </div>
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
          name="Keysmith for YubiKey"
          description="Local-first desktop client for inspecting and configuring YubiKeys with a modern developer-tool feel"
          url="https://github.com/MihirSahu/Keysmith"
          status="In Progress"
        />
        <BuildTemplate
          name="PokeScout"
          description="Local-first dashboard and agent for tracking Pokemon TCG sealed product availability and purchase rules"
          status="In Progress"
        />
        <BuildTemplate
          name="FounderBench"
          description="Benchmark for evaluating AI agents on founder-style startup workflows"
          url="https://github.com/MihirSahu/FounderBench"
          status="In Progress"
        />
        <BuildTemplate
          name="LocalBird"
          description="Native macOS utility that captures local screen context, runs OCR, and generates daily routine packets"
          url="https://github.com/MihirSahu/LocalBird"
          status="In Progress"
        />
        <BuildTemplate
          name="Petal"
          description="Native iOS prototype for a private two-person notes app with SwiftUI, Firebase, widgets, and haptics"
          url="https://github.com/MihirSahu/petal"
          status="In Progress"
        />
        <BuildTemplate
          name="Foundry"
          description="Turns vague ideas into PRDs, build plans, starter repos, and coding-agent handoffs"
          url="https://github.com/MihirSahu/foundry"
          status="In Progress"
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
