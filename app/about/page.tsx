import About from "../components/about";
import { createPageMetadata, siteSections } from "../site-metadata";

const section = siteSections.find(({ href }) => href === "/about")!;
export const metadata = createPageMetadata(
  section.title,
  section.description,
  section.href,
);

export default function AboutPage() {
  return <About />;
}
