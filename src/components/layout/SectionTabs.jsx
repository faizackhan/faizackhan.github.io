import starIcon from "../../assets/ThemeIcon.png";

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
          <img
            src={starIcon}
            alt=""
            className="theme-star"
            draggable={false}
          />
        </button>
      </div>
    </div>
  );
}