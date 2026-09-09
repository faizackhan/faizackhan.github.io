import darkIcon from "../../assets/pixel-icons/SVG/solid/brightness-high-solid.svg?raw";
import lightIcon from "../../assets/pixel-icons/SVG/solid/brightness-low-solid.svg?raw";
import fkLogo from "../../assets/fklogo.png";

const tabs = ["About", "Skills", "Projects", "Experience", "CSCA20", "Contact"];

export default function SectionTabs({
  activeSection,
  setActiveSection,
  theme,
  setTheme,
}) {
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="section-tabs-wrap">
      <nav className="section-tabs">
        <button
          className="section-tabs-logo"
          onClick={() => document.getElementById("landing")?.scrollIntoView({ behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          <img src={fkLogo} alt="FK Logo" />
        </button>

        <div className="section-tabs-left">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSection(tab)}
              className={`section-tab ${activeSection === tab ? "active" : ""}`}
            >
              {tab.toLowerCase()}
            </button>
          ))}
        </div>

        <button
          onClick={toggleTheme}
          className="star-toggle"
          aria-label="Toggle theme"
        >
          <span
            className="theme-star"
            dangerouslySetInnerHTML={{
              __html: theme === "dark" ? lightIcon : darkIcon,
            }}
          />
        </button>
      </nav>
    </div>
  );
}