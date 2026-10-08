import Thoughts from "../components/thoughts";
import { createPageMetadata, siteSections } from "../site-metadata";

const section = siteSections.find(({ href }) => href === "/thoughts")!;
export const metadata = createPageMetadata(
  section.title,
  section.description,
  section.href,
);

export default function ThoughtsPage() {
  return <Thoughts />;
}
