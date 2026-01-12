interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <section className="mb-12">
      <h2 className="mb-4 text-sm font-medium text-gray-500">{title}</h2>
      {children}
    </section>
  );
}

export default Section;
