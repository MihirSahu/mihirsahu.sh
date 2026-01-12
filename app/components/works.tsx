import Section from "./section";

interface WorksProps {
  title: string;
  description: string;
}

function WorksTemplate({ title, description }: WorksProps) {
  return (
    <div
      rel="noopener noreferrer"
      className="-mx-3 flex flex-col rounded-lg px-3 py-3 transition-colors hover:bg-gray-100/60"
    >
      <span className="font-medium">{title}</span>
      <span className="text-gray-600">{description}</span>
    </div>
  );
}

const Works = () => {
  return (
    <Section title="Previous Work">
      <div className="flex flex-col">
        <WorksTemplate
          title="HCSS [Spring 2025]"
          description="Built modern tools for the construction industry."
        />
        <WorksTemplate
          title="BidOut/Breaker19 [Internship] [Winter 2023]"
          description="Built the Uber for oil & gas trucking."
        />
        <WorksTemplate
          title="Chevron [Internship] [Summer 2023-2024]"
          description="2x internship for software engineering and project management."
        />
      </div>
    </Section>
  );
};

export default Works;
