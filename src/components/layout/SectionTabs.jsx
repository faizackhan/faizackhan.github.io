import darkIcon from "../../assets/pixel-icons/SVG/solid/brightness-high-solid.svg?raw";
import lightIcon from "../../assets/pixel-icons/SVG/solid/brightness-low-solid.svg?raw";

const tabs = ["About", "Skills", "Projects", "Experience", "Contact"];

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
      <div className="font-body section-tabs">
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
      </div>
    </div>
  );
}