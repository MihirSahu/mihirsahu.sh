"use client";

import { useSection } from "../context/SectionContext";
import Thinker from "./thinker";
import About from "./about";
import Builds from "./builds";
import Companies from "./companies";
import Thoughts from "./thoughts";
// import Library from "./library";

export default function Home() {
  const { currentSection, setCurrentSection } = useSection();

  return (
    <>
      {currentSection === "About" && <About />}

      {currentSection === "Thoughts" && <Thoughts />}

      {currentSection === "Builds" && <Builds />}

      {/* {currentSection === "Library" && <Library />} */}

      {currentSection === "Tools" && <Companies />}

      {currentSection === "Home" && (
        <div
          className="sticky top-24 shrink-0 justify-self-center lg:block"
          data-nosnippet
        >
          <Thinker className="block h-auto w-full overflow-visible text-foreground" />
        </div>
      )}

      {currentSection === "Home" && (
        <div>
          <div
            className="cursor-pointer"
            onClick={() => setCurrentSection("About")}
          >
            [ About ]
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setCurrentSection("Thoughts")}
          >
            [ Thoughts ]
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setCurrentSection("Builds")}
          >
            [ Builds ]
          </div>
          {/* <div
            className="cursor-pointer"
            onClick={() => setCurrentSection("Library")}
          >
            [ Library ]
          </div> */}
          <div
            className="cursor-pointer"
            onClick={() => setCurrentSection("Tools")}
          >
            [ Tools ]
          </div>
        </div>
      )}
    </>
  );
}
