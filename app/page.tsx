import Home from "./components/home";
import { createPageMetadata, siteDescription, siteName } from "./site-metadata";

export const metadata = createPageMetadata(siteName, siteDescription, "/");

export default function Page() {
  return <Home />;
}
