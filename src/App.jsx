import { useEffect, useRef, useState } from "react";
import PageFrame from "./components/layout/PageFrame";
import SectionTabs from "./components/layout/SectionTabs";
import Sections from "./components/layout/Sections";

import LandingPage from "./components/sections/LandingPage";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experiences from "./components/sections/Experiences";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import CSCA20Notes from "./components/sections/CSCA20Notes.jsx";

const SECTION_IDS = {
  LandingPage: "landing",
  About: "about",
  Skills: "skills",
  Projects: "projects",
  Experience: "experience",
  CSCA20: "csca20",
  Contact: "contact",
};

export default function App() {
  const [theme, setTheme] = useState("light");
  const [activeSection, setActiveSection] = useState("LandingPage");
  const [showNav, setShowNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const landingRef = useRef(null);
  const sectionRefs = useRef({});

  // Show/hide fixed nav once you scroll past the landing section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowNav(!entry.isIntersecting),
      { threshold: 0 }
    );
    if (landingRef.current) observer.observe(landingRef.current);
    return () => observer.disconnect();
  }, []);

  // Highlight the nav tab for whichever section is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = Object.entries(SECTION_IDS).find(
              ([, id]) => id === entry.target.id
            );
            if (match) setActiveSection(match[0]);
          }
        });
      },
      { threshold: 0.4 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSetSection = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
    const id = SECTION_IDS[section];
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleToggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div className={theme === "dark" ? "theme-dark" : "theme-light"}>
      <PageFrame>
        {/* Nav — fixed at top, visible only after scrolling past landing */}
        <div className={`top-menu-fixed ${showNav || menuOpen ? "menu-visible" : "menu-hidden"}`}>
          <SectionTabs
            activeSection={activeSection}
            setActiveSection={handleSetSection}
            theme={theme}
            setTheme={setTheme}
          />
        </div>

        {/* All sections, stacked, on one page */}
        <section className="main-content-section">
          <div className="main-panel-content">

            {/* Landing — now inside the same continuous panel */}
            <div
              id="landing"
              ref={(el) => {
                landingRef.current = el;
                sectionRefs.current.landing = el;
              }}
            >
              <LandingPage menuOpen={menuOpen} onToggleMenu={handleToggleMenu} />
            </div>

            <Sections id="about" ref={(el) => (sectionRefs.current.about = el)}>
              <About />
            </Sections>
            <Sections id="skills" ref={(el) => (sectionRefs.current.skills = el)}>
              <Skills />
            </Sections>
            <Sections id="projects" ref={(el) => (sectionRefs.current.projects = el)}>
              <Projects />
            </Sections>
            <Sections id="experience" ref={(el) => (sectionRefs.current.experience = el)}>
              <Experiences />
            </Sections>
            <Sections id="csca20" ref={(el) => (sectionRefs.current.csca20 = el)}>
              <CSCA20Notes />
            </Sections>
            <Sections id="contact" ref={(el) => (sectionRefs.current.contact = el)}>
              <Contact />
            </Sections>
            <Footer theme={theme} setTheme={setTheme} />
          </div>
        </section>
      </PageFrame>
    </div>
  );
}