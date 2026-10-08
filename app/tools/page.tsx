import Companies from "../components/companies";
import { createPageMetadata, siteSections } from "../site-metadata";

const section = siteSections.find(({ href }) => href === "/tools")!;
export const metadata = createPageMetadata(
  section.title,
  section.description,
  section.href,
);

export default function ToolsPage() {
  return <Companies />;
}
