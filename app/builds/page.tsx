import Builds from "../components/builds";
import { createPageMetadata, siteSections } from "../site-metadata";

const section = siteSections.find(({ href }) => href === "/builds")!;
export const metadata = createPageMetadata(
  section.title,
  section.description,
  section.href,
);

export default function BuildsPage() {
  return <Builds />;
}
