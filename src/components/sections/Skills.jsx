import { useMemo, useState } from "react";
import starIcon from "../../assets/pixel-icons/SVG/solid/star-solid.svg?raw";

import codeIconRaw from "../../assets/pixel-icons/SVG/regular/code.svg?raw";
import androidIcon from "../../assets/pixel-icons/SVG/brands/android.svg?raw";
import figmaIcon from "../../assets/pixel-icons/SVG/brands/figma.svg?raw";

import pythonIcon from "../../assets/pixel-icons/custom/pythonicon.svg?raw";
import cppIcon from "../../assets/pixel-icons/custom/cppicon.svg?raw";
import javaIcon from "../../assets/pixel-icons/custom/javaicon.svg?raw";
import jsIcon from "../../assets/pixel-icons/custom/jsicon.svg?raw";
import htmlIcon from "../../assets/pixel-icons/custom/htmlicon.svg?raw";
import cssIcon from "../../assets/pixel-icons/custom/css3icon.svg?raw";
import rIcon from "../../assets/pixel-icons/custom/ricon.svg?raw";
import swiftIcon from "../../assets/pixel-icons/custom/swifticon.svg?raw";
import bashIcon from "../../assets/pixel-icons/custom/bashicon.svg?raw";

import supabaseIcon from "../../assets/pixel-icons/custom/supabaseicon.svg?raw";
import firebaseIcon from "../../assets/pixel-icons/custom/firebaseicon.svg?raw";

import matplotlibIcon from "../../assets/pixel-icons/custom/matplotlibicon.svg?raw";
import pandasIcon from "../../assets/pixel-icons/custom/pandasicon.svg?raw";
import jupyterIcon from "../../assets/pixel-icons/custom/jupytericon.svg?raw";
import rstudioIcon from "../../assets/pixel-icons/custom/rstudioicon.svg?raw";
import numpyIcon from "../../assets/pixel-icons/custom/numpyicon.svg?raw";


import gitIcon from "../../assets/pixel-icons/custom/giticon.svg?raw";
import jiraIcon from "../../assets/pixel-icons/custom/jiraicon.svg?raw";
import viteIcon from "../../assets/pixel-icons/custom/viteicon.svg?raw";
import vercelIcon from "../../assets/pixel-icons/custom/vercelicon.svg?raw";
import reactIcon from "../../assets/pixel-icons/custom/reacticon.svg?raw";
import tailwindcssIcon from "../../assets/pixel-icons/custom/tailwindcssicon.svg?raw";
import nextjsIcon from "../../assets/pixel-icons/custom/nextjsicon.svg?raw";
import nodejsIcon from "../../assets/pixel-icons/custom/nodejsicon.svg?raw";



function recolorSvg(svg) {
  return svg
    .replace(/<\?xml[\s\S]*?\?>/g, "")
    .replace(/<!DOCTYPE[\s\S]*?>/gi, "")
    .replace(/\swidth=['"][^'"]*['"]/gi, "")
    .replace(/\sheight=['"][^'"]*['"]/gi, "")
    .replace(
      /<svg([^>]*)>/i,
      `<svg$1 width="100%" height="100%" preserveAspectRatio="xMidYMid meet">`
    );
}
function SkillIcon({ icon, color, label, className = "skill-icon" }) {
  const svgMarkup = useMemo(() => recolorSvg(icon), [icon]);

  return (
    <span
      className={className}
      style={{ color }}
      aria-label={label}
      role="img"
      dangerouslySetInnerHTML={{ __html: svgMarkup }}
    />
  );
}



const categoryMeta = {
  languages: {
    icon: starIcon,
    color: "#356ac7",
  },
  devtools: {
    icon: starIcon,
    color: "#356ac7",
  },
  databases: {
    icon: starIcon,
    color: "#356ac7",
  },
  "data science": {
    icon: starIcon,
    color: "#356ac7",
  },
  "frameworks & libraries": {
    icon: starIcon,
    color: "#356ac7",
  },
};



const skillCategories = {
  languages: [
    { name: "python", icon: pythonIcon, color: "#356ac7" },
    { name: "javascript", icon: jsIcon, color: "#356ac7" },
    { name: "java", icon: javaIcon, color: "#356ac7" },
    { name: "C", icon: cppIcon, color: "#356ac7" },
    { name: "R", icon: rIcon, color: "#356ac7" },
    { name: "html5", icon: htmlIcon, color: "#356ac7" },
    { name: "css3", icon: cssIcon, color: "#356ac7" },
    { name: "xml", icon: codeIconRaw, color: "#356ac7" },
    { name: "bash", icon: bashIcon, color: "#356ac7" },
    { name: "swift", icon: swiftIcon, color: "#356ac7" },
  ],

  devtools: [
    { name: "git", icon: gitIcon, color: "#356ac7" },
    { name: "figma", icon: figmaIcon, color: "#356ac7" },
    { name: "jira", icon: jiraIcon, color: "#356ac7" },
    { name: "vite", icon: viteIcon, color: "#356ac7" },
    { name: "xcode", icon: codeIconRaw, color: "#356ac7" },
    { name: "android studio", icon: androidIcon, color: "#356ac7" },
    { name: "vscode", icon: codeIconRaw, color: "#356ac7" },
    { name: "vercel", icon: vercelIcon, color: "#356ac7" }
  ],

  databases: [
    { name: "firebase", icon: firebaseIcon, color: "#356ac7" },
    { name: "supabase", icon: supabaseIcon, color: "#356ac7" }
  ],

  "data science": [
    { name: "pandas", icon: pandasIcon, color: "#356ac7" },
    { name: "numpy", icon: numpyIcon, color: "#356ac7" },
    { name: "matplotlib", icon: matplotlibIcon, color: "#356ac7" },
    { name: "jupyter", icon: jupyterIcon, color: "#356ac7" },
    { name: "r studio", icon: rstudioIcon, color: "#356ac7" },
  ],

  "frameworks & libraries": [
    { name: "react", icon: reactIcon, color: "#356ac7" },
    { name: "next.js", icon: nextjsIcon, color: "#356ac7" },
    { name: "tailwindCSS", icon: tailwindcssIcon, color: "#356ac7" },
    { name: "node.js", icon: nodejsIcon, color: "#356ac7" },
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
            <SkillIcon
              icon={categoryMeta[category].icon}
              color={categoryMeta[category].color}
              label={`${category} icon`}
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