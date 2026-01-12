import Section from "./section";

interface ContactsProps {
  href: string;
  label: string;
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="ml-1 inline-block"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ContactsTemplate({ href, label }: ContactsProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 transition-colors hover:text-foreground"
    >
      {label}
      <ArrowIcon />
    </a>
  );
}

const Contacts = () => {
  return (
    <Section title="Connect">
      <div className="flex flex-col space-y-5">
        <div>
          The best way to contact me is at mihir [at] mihirsahu.com. You can
          also reach out via these channels:
        </div>
        <div className="flex gap-6">
          <ContactsTemplate href="https://x.com/TheMihirSahu" label="X" />
          <ContactsTemplate
            href="https://www.linkedin.com/in/the-mihir-sahu/"
            label="LinkedIn"
          />{" "}
          <ContactsTemplate
            href="https://github.com/mihirsahu"
            label="GitHub"
          />
        </div>
      </div>
    </Section>
  );
};

export default Contacts;
