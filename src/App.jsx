import { useEffect, useRef, useState } from "react";
import PageFrame from "./components/layout/PageFrame";
import SectionTabs from "./components/layout/SectionTabs";

import LandingPage from "./components/sections/LandingPage";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experiences from "./components/sections/Experiences";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [activeSection, setActiveSection] = useState("About");
  const [showSwirl, setShowSwirl] = useState(true);
  const [showTopTabs, setShowTopTabs] = useState(false);

  const landingRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!landingRef.current) return;

      const rect = landingRef.current.getBoundingClientRect();
      const landingStillVisible = rect.bottom > window.innerHeight * 0.35;

      setShowSwirl(landingStillVisible);
      setShowTopTabs(!landingStillVisible);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSetSection = (section) => {
    setActiveSection(section);

    const mainContent = document.getElementById("main-content");
    if (mainContent) {
      mainContent.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderSection = () => {
    switch (activeSection) {
      case "About":
        return <About />;
      case "Skills":
        return <Skills />;
      case "Projects":
        return <Projects />;
      case "Experience":
        return <Experiences />;
      case "Contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className={theme === "dark" ? "theme-dark" : "theme-light"}>
      <PageFrame>
        {showTopTabs && (
          <div className="top-menu-fixed">
            <SectionTabs
              activeSection={activeSection}
              setActiveSection={handleSetSection}
              theme={theme}
              setTheme={setTheme}
            />
          </div>
        )}

        {showTopTabs && <div className="top-menu-spacer" />}

        <div ref={landingRef}>
          <LandingPage showSwirl={showSwirl} />
        </div>

        <section id="main-content" className="main-content-section">
          <div className="main-panel-content">
            {renderSection()}
          </div>
        </section>

        <Footer />
      </PageFrame>
    </div>
  );
}