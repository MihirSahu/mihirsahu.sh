import Section from "./section";

const Today = () => {
  return (
    <Section title="Today">
      <div className="space-y-5">
        <p className="leading-relaxed text-gray-900">
          I'm a builder, tinkerer, and learner. I find joy in coming across new
          ideas, meeting exceptional people, and making an impact.
        </p>
        <p className="leading-relaxed text-gray-900">
          I want to to help founders build well-crafted products that inspire
          people and create companies that make an outsized impact on the world.
        </p>
        <p className="leading-relaxed text-gray-900">
          Currently, I build large-scale authentication systems at Visa.
        </p>
      </div>
    </Section>
  );
};

export default Today;
