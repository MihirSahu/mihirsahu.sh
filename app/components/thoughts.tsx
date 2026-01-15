import Link from "next/link";
import Section from "./section";

interface ThoughtsProps {
  href: string;
  title: string;
  published: boolean;
}

function ThoughtsTemplate({ href, title, published }: ThoughtsProps) {
  return (
    <Link
      href={href}
      className="-mx-3 block rounded-lg px-3 py-2 transition-colors hover:bg-gray-100/60"
    >
      [ {title} ]{" "}
      {!published && (
        <span className="text-center text-gray-600">Coming Soon</span>
      )}
    </Link>
  );
}

const Thoughts = () => {
  return (
    <Section title="Thoughts">
      <div className="flex flex-col">
        <ThoughtsTemplate
          title="Agency"
          href="/thoughts/agency"
          published={false}
        />
        <ThoughtsTemplate
          title="Monsters"
          href="/thoughts/monsters"
          published={false}
        />
      </div>
    </Section>
  );
};

export default Thoughts;
