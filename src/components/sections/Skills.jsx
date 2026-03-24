import { useMemo, useState } from "react";
import pinkStar from "../../assets/starIcon.png";

import codeIconRaw from "../../assets/pixel-icons/SVG/regular/code.svg?raw";
import androidIcon from "../../assets/pixel-icons/SVG/brands/android.svg?raw";

function recolorSvg(svg) {
  return svg
    .replace(/<\?xml[\s\S]*?\?>/g, "")
    .replace(/<svg([^>]*?)\s*width=['"][^'"]*['"]/gi, "<svg$1")
    .replace(/<svg([^>]*?)\s*height=['"][^'"]*['"]/gi, "<svg$1")
    .replace(/<svg([^>]*)>/i, `<svg$1 width="100%" height="100%">`);
}

function SkillIcon({ icon, color, label }) {
  const svgMarkup = useMemo(() => recolorSvg(icon), [icon]);

  return (
    <span
      className="skill-icon"
      style={{ color }}        // ← this feeds currentColor
      aria-label={label}
      role="img"
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
    />
  );
}

const skillCategories = {
  languages: [
    { name: "python", icon: codeIconRaw, color: "#f4a9c2" },
    { name: "javascript", icon: codeIconRaw, color: "#f4a9c2" },
    { name: "java", icon: codeIconRaw, color: "#f4a9c2" },
    { name: "c", icon: codeIconRaw, color: "#f4a9c2" },
    { name: "c++", icon: codeIconRaw, color: "#f4a9c2" },
    { name: "html", icon: codeIconRaw, color: "#f4a9c2" },
    { name: "css", icon: codeIconRaw, color: "#f4a9c2" },
    { name: "r", icon: codeIconRaw, color: "#f4a9c2" },
    { name: "xml", icon: codeIconRaw, color: "#f4a9c2" },
    { name: "swift", icon: codeIconRaw, color: "#f4a9c2" },
  ],

  devtools: [
    { name: "git", icon: codeIconRaw, color: "#f4a9c2" },
    { name: "github", icon: codeIconRaw, color: "#f4a9c2" },
    { name: "figma", icon: codeIconRaw, color: "#f4a9c2" },
    { name: "jira", icon: codeIconRaw, color: "#f4a9c2" },
    { name: "vite", icon: codeIconRaw, color: "#f4a9c2" },
    { name: "xcode", icon: codeIconRaw, color: "#f4a9c2" },
    { name: "android studio", icon: androidIcon, color: "#f4a9c2" },
    { name: "vscode", icon: codeIconRaw, color: "#f4a9c2" },
  ],

  databases: [
    { name: "sql", icon: codeIconRaw, color: "#f4a9c2" },
    { name: "firebase", icon: codeIconRaw, color: "#f4a9c2" },
    { name: "supabase", icon: codeIconRaw, color: "#f4a9c2" },
  ],

  "data science": [
    { name: "pandas", icon: codeIconRaw, color: "#f4a9c2" },
    { name: "numpy", icon: codeIconRaw, color: "#f4a9c2" },
    { name: "matplotlib", icon: codeIconRaw, color: "#f4a9c2" },
    { name: "jupyter", icon: codeIconRaw, color: "#f4a9c2" },
    { name: "r studio", icon: codeIconRaw, color: "#f4a9c2" },
  ],

  other: [
    { name: "react", icon: codeIconRaw, color: "#f4a9c2" },
    { name: "next.js", icon: codeIconRaw, color: "#f4a9c2" },
    { name: "tailwind", icon: codeIconRaw, color: "#f4a9c2" },
    { name: "node.js", icon: codeIconRaw, color: "#f4a9c2" },
  ],
};

const categoryNames = Object.keys(skillCategories);

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("languages");

  return (
    <div className="section-page skills-main">
      <h2 className="section-title font-heading">skills</h2>

      <div className="skills-tabs-row">
        {categoryNames.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`skills-tab ${activeCategory === category ? "active" : ""}`}
          >
            <img
              src={pinkStar}
              alt=""
              className="skills-tab-star"
              draggable={false}
            />
            <span className="font-body">{category}</span>
          </button>
        ))}
      </div>

      <div className="skills-panel">
        <div className="skills-grid">
          {skillCategories[activeCategory].map((skill) => (
            <div key={skill.name} className="skill-item">
              <SkillIcon
                icon={skill.icon}
                color={skill.color}
                label={skill.name}
              />
              <p className="skill-name font-body">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}