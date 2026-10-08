interface SectionProps {
  title: string;
  children: React.ReactNode;
  headingLevel?: 1 | 2;
}

function Section({ title, children, headingLevel = 2 }: SectionProps) {
  const Heading = headingLevel === 1 ? "h1" : "h2";
  return (
    <section className="mb-12">
      <Heading className="mb-4 text-sm font-medium text-gray-500">{title}</Heading>
      {children}
    </section>
  );
}

export default Section;
