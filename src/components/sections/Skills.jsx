import { useMemo, useRef, useState } from "react";


import bash from "/src/assets/pixel-icons/custom/bashicon.svg";
import cpp from "/src/assets/pixel-icons/custom/cppicon.svg";
import css from "/src/assets/pixel-icons/custom/css3icon.svg";
import firebase from "/src/assets/pixel-icons/custom/firebaseicon.svg";
import git from "/src/assets/pixel-icons/custom/giticon.svg";
import html from "/src/assets/pixel-icons/custom/htmlicon.svg";
import java from "/src/assets/pixel-icons/custom/javaicon.svg";
import jira from "/src/assets/pixel-icons/custom/jiraicon.svg";
import js from "/src/assets/pixel-icons/custom/jsicon.svg";
import jupyter from "/src/assets/pixel-icons/custom/jupytericon.svg";
import matplotlib from "/src/assets/pixel-icons/custom/matplotlibicon.svg";
import mysql from "/src/assets/pixel-icons/custom/mysql.svg";
import nextjs from "/src/assets/pixel-icons/custom/nextjsicon.svg";
import nodejs from "/src/assets/pixel-icons/custom/nodejsicon.svg";
import numpy from "/src/assets/pixel-icons/custom/numpyicon.svg";
import pandas from "/src/assets/pixel-icons/custom/pandasicon.svg";
import postgresql from "/src/assets/pixel-icons/custom/postgresql.svg";
import python from "/src/assets/pixel-icons/custom/pythonicon.svg";
import react from "/src/assets/pixel-icons/custom/reacticon.svg";
import r from "/src/assets/pixel-icons/custom/ricon.svg";
import rstudio from "/src/assets/pixel-icons/custom/rstudioicon.svg";
import sqlite from "/src/assets/pixel-icons/custom/sqlite.svg";
import supabase from "/src/assets/pixel-icons/custom/supabaseicon.svg";
import swift from "/src/assets/pixel-icons/custom/swifticon.svg";
import tailwind from "/src/assets/pixel-icons/custom/tailwindcssicon.svg";
import vercel from "/src/assets/pixel-icons/custom/vercelicon.svg";
import vite from "/src/assets/pixel-icons/custom/viteicon.svg";





const SKILL_ICONS = {
    "bash": bash,
    "c": cpp,
    "cpp": cpp,
    "css": css,
    "firebase": firebase,
    "git": git,
    "html": html,
    "java": java,
    "jira": jira,
    "javascript": js,
    "jupyter": jupyter,
    "matplotlib": matplotlib,
    "mysql": mysql,
    "next.js": nextjs,
    "node.js": nodejs,
    "numpy": numpy,
    "pandas": pandas,
    "postgresql": postgresql,
    "python": python,
    "react": react,
    "r": r,
    "rstudio": rstudio,
    "sqlite": sqlite,
    "supabase": supabase,
    "swift": swift,
    "tailwind": tailwind,
    "vercel": vercel,
    "vite": vite
};


const CATEGORIES = {
  "languages": ["bash","python", "c", "java", "javascript", "typescript", "html", "css", "sql", "r"],
  "data & ml": ["python", "r", "sql", "pandas", "scikit-learn", "pytorch", "tableau"],
  "frontend": ["react", "javascript", "html", "css", "figma", "tailwind", "node.js", "next.js"],
  "tools": ["git", "excel", "jupyter", "vs code", "power bi", "figma", "mural", "framer", "notion", "microsoft office", "jira", "vite", "vercel"],
};

const SLOTS = [
  { left: 15, top: 15 }, { left: 50, top: 8 },  { left: 85, top: 15 },
  { left: 8,  top: 50 },                         { left: 92, top: 50 },
  { left: 18, top: 85 }, { left: 50, top: 92 },  { left: 82, top: 85 },
  { left: 32, top: 26 }, { left: 68, top: 26 },
  { left: 30, top: 74 }, { left: 70, top: 74 },
  { left: 5,  top: 25 }, { left: 95, top: 25 },
  { left: 5,  top: 75 }, { left: 95, top: 75 },
];

function initials(skill) {
  const clean = skill.replace(/[^a-z0-9]/gi, " ").trim();
  const parts = clean.split(/\s+/);
  if (parts.length > 1) return (parts[0][0] + parts[1][0]).toUpperCase();
  return clean.slice(0, 2).toUpperCase();
}

function SkillIcon({ skill, className }) {
  const icon = SKILL_ICONS[skill];
  if (icon) {
    return <img src={icon} alt={`${skill} icon`} className={className} />;
  }
  return <span className={`${className} skill-icon-placeholder`}>{initials(skill)}</span>;
}

export default function Skills() {
  const tabs = Object.keys(CATEGORIES);
  const [active, setActive] = useState(tabs[0]);
  const [overrides, setOverrides] = useState({}); // "tab::skill" -> { left, top } in %
  const [draggingKey, setDraggingKey] = useState(null);
  const wrapRef = useRef(null);
  const dragOffset = useRef({ dx: 0, dy: 0 });

  const positioned = useMemo(
    () =>
      CATEGORIES[active].map((skill, i) => ({
        skill,
        key: `${active}::${skill}`,
        slot: SLOTS[i % SLOTS.length],
        delay: (i % 5) * 0.4,
        duration: 3.6 + (i % 3) * 0.5,
      })),
    [active]
  );

  function clientToPercent(clientX, clientY) {
    const rect = wrapRef.current.getBoundingClientRect();
    const left = ((clientX - rect.left) / rect.width) * 100;
    const top = ((clientY - rect.top) / rect.height) * 100;
    return {
      left: Math.min(97, Math.max(3, left)),
      top: Math.min(97, Math.max(3, top)),
    };
  }

  function handlePointerDown(e, key, currentPercent) {
    e.preventDefault();
    const rect = wrapRef.current.getBoundingClientRect();
    const pointerPercent = clientToPercent(e.clientX, e.clientY);
    dragOffset.current = {
      dx: pointerPercent.left - currentPercent.left,
      dy: pointerPercent.top - currentPercent.top,
    };
    setDraggingKey(key);

    function onMove(ev) {
      const p = clientToPercent(ev.clientX, ev.clientY);
      setOverrides((prev) => ({
        ...prev,
        [key]: {
          left: Math.min(97, Math.max(3, p.left - dragOffset.current.dx)),
          top: Math.min(97, Math.max(3, p.top - dragOffset.current.dy)),
        },
      }));
    }

    function onUp() {
      setDraggingKey(null);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    }

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  }

  return (
    <div className="skills-main">
      <h2 className="about-heading">skills & tools</h2>

      <div className="skills-floating-wrap" ref={wrapRef}>
        <div className="skills-floating-center">
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

        {positioned.map(({ skill, key, slot, delay, duration }) => {
          const pos = overrides[key] || slot;
          const isDragging = draggingKey === key;
          return (
            <div
              key={key}
              className={`skill-floating-item ${isDragging ? "is-dragging" : ""}`}
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
              onPointerDown={(e) => handlePointerDown(e, key, pos)}
            >
              <div className="skill-floating-icon">
                <SkillIcon skill={skill} className="skill-floating-icon-inner" />
              </div>
              <p className="skill-floating-name">{skill}</p>
            </div>
          );
        })}
      </div>

      <div className="skills-tabs-row skills-tabs-row-mobile">
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
      <div className="skills-panel skills-panel-mobile">
        <div className="skills-grid">
          {CATEGORIES[active].map((skill) => (
            <div key={skill} className="skill-item">
              <div className="skill-icon" aria-hidden>
                <SkillIcon skill={skill} className="skill-icon-inner" />
              </div>
              <p className="skill-name">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}