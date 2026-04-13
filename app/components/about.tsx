import Section from "./section";
import SideQuests from "./side-quests";

interface WorksProps {
  title: string;
  description: string;
}

function WorksTemplate({ title, description }: WorksProps) {
  return (
    <div>
      <p className="font-medium leading-relaxed text-gray-900">{title}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

const About = () => {
  return (
    <>
      <Section title="About">
        <div className="space-y-5 mb-8">
          <p className="leading-relaxed text-gray-900">
            I'm a builder, tinkerer, and learner. I find joy in coming across
            new ideas, meeting exceptional people, and making an impact.
          </p>
          <p className="leading-relaxed text-gray-900">
            I want to to help founders build well-crafted products that inspire
            people and create companies that make an outsized impact on the
            world.
          </p>
          <p className="leading-relaxed text-gray-900">
            Currently, I build large-scale authentication systems at Visa.
          </p>
        </div>
      </Section>

      <SideQuests />

      <Section title="Previous Work">
        <div className="space-y-5 mb-8">
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
    </>
  );
};

export default About;
