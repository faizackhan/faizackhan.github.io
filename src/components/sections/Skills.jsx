import { useState } from "react";

const CATEGORIES = {
"languages": ["python", "c", "java", "javascript", "typescript", "html", "css", "sql", "r"],
  "data & ml": ["python", "r", "sql", "pandas", "scikit-learn", "pytorch", "tableau"],
  "frontend": ["react", "javascript", "html/css", "figma", "tailwind", "node.js", "next.js"],
  "tools": ["git", "excel", "jupyter", "vs code", "power bi", "figma", "mural", "framer", "notion", "microsoft office", "google workspace"],
};

export default function Skills() {
  const tabs = Object.keys(CATEGORIES);
  const [active, setActive] = useState(tabs[0]);

  return (
    <div className="skills-main">
      <h2 className="about-heading">skills & tools</h2>

      <div className="skills-tabs-row">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`skills-tab ${active === tab ? "active" : ""}`}
            onClick={() => setActive(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="skills-panel">
        <div className="skills-grid">
          {CATEGORIES[active].map((skill) => (
            <div key={skill} className="skill-item">
              <div className="skill-icon" aria-hidden>
                ◆
              </div>
              <p className="skill-name">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}