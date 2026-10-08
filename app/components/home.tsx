import SiteNav from "./site-nav";
import Thinker from "./thinker";

export default function Home() {
  return (
    <>
      <h1 className="sr-only">Mihir Sahu — software engineer and builder</h1>
      <div
        className="sticky top-24 shrink-0 justify-self-center lg:block"
        data-nosnippet
      >
        <Thinker className="block h-auto w-full overflow-visible text-foreground" />
      </div>
      <SiteNav className="flex flex-col" />
    </>
  );
}
