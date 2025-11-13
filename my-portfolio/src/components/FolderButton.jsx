import React, { useState } from "react";
import "./FolderButton.css";
import avatar from "../assets/avatar.png"; 

export default function FolderButton() {
  const [activeTab, setActiveTab] = useState("About Me");

  /* page colours */
  const getPageColor = () => {
    switch (activeTab) {
      case "About Me":
        return "var(--page1)";
      case "Projects":
        return "var(--page2)";
      case "Skills":
        return "var(--page3)";
      case "Experience":
        return "var(--page4)";
      case "Contact":
        return "var(--page5)";
      default:
        return "var(--page1)";
    }
  };

  /* page font colours */
  const getTextColor = () => {
    switch (activeTab) {
      case "About Me":
        return "var(--tabfont1)";
      case "Projects":
        return "#var(--tabfont2)";
      case "Skills":
        return "#var(--tabfont3)";
      case "Experience":
        return "#var(--tabfont4)";
      case "Contact":
        return "#var(--tabfont5)";
      default:
        return "#var(--tabfont1)";
    }
  };

  const tabs = ["About Me", "Projects", "Skills", "Experience", "Contact"];

  return (
    <div className="folder-container">
      {/* tabs */}
      <nav id="tabs">
        {tabs.map((tab, i) => (
          <div
            key={tab}
            className={`folder-tab ${activeTab === tab ? "selected" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            <span>{tab}</span>
          </div>
        ))}
      </nav>

      {/* page content */}
      <div
        id="page"
        style={{
          background: getPageColor(),
          color: getTextColor(),
        }}
      >
        {activeTab === "About Me" && (
          <div className="page about-page">
            <div className="about-container">
              <img src={avatar} alt="Faiza Khan" className="about-avatar" />
              <div className="about-text">
                <h2>About Me</h2>
                <p>
                  Hi! I’m <b>Faiza Khan</b>, a student at the University of Toronto. As a statistics specialist student. 
                  I love exploring the world through data. As a self-taught programmer and designer, 
                  I combine creativity with analytics to make data more visual, 
                  approachable, and insightful for everyone! 
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Projects" && (
          <div className="page projects-page">
            <h2 className="text-4xl mb-4 text-white">Projects</h2>
            <ul>
              <li>Spotify Data Analysis - 2025</li>
              <li>Las Vegas F1 Comp Analysis - UofT Workshop 2024</li>
            </ul>
          </div>
        )}

        {activeTab === "Skills" && (
          <div className="p-8 font-winky-sans">
          <div className="page skills-page">
            <h2 className="text-4xl mb-4">Skills</h2>
            <div className="skills-grid">
              <span className="text-[rgb(255,255,255)]">React</span>
              <span className="text-[rgb(255,255,255)]">TailwindCSS</span>
              <span className="text-[rgb(255,255,255)]">NEXT.js</span>
              <span className="text-[rgb(255,255,255)]">html</span>
              <span className="text-[rgb(255,255,255)]">css</span>
              <span className="text-[rgb(255,255,255)]">JavaScript</span>
              <span className="text-[rgb(255,255,255)]">Python</span>
              <span className="text-[rgb(255,255,255)]">C</span>
              <span className="text-[rgb(255,255,255)]">C++</span>
              <span className="text-[rgb(255,255,255)]">Pandas</span>
              <span className="text-[rgb(255,255,255)]">Numpy</span>
              <span className="text-[rgb(255,255,255)]">MatPlotLib</span>
              <span className="text-[rgb(255,255,255)]">Jupyter</span>
              <span className="text-[rgb(255,255,255)]">Java</span>
              <span className="text-[rgb(255,255,255)]">Canva</span>
              <span className="text-[rgb(255,255,255)]">Figma</span>
            </div>
          </div>
          </div>
        )}

        {activeTab === "Experience" && (
          <div className="page experience-page">
            <h2 className="text-4xl mb-4">Experience</h2>
            <div className="timeline">
              <div className="timeline-item">
                <span className="year">2024</span>
                <p>VP of The Quanitative AI & Fintech Society - UofT</p>
              </div>
              <div className="timeline-item">
                <span className="year">2025</span>
                <p>Finance Member of Amacss - UofT</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Contact" && (
        <div className="page contact-page p-8 text-[rgb(255,255,255)]">
        <h2 className="text-4xl mb-6 font-bold">Contact Me</h2>

        <div className="contact-info space-y-4 text-xl">
        <p className> 
        <span className="text-[rgb(180,200,255)] text-3xl"> Email: faizakhanc@gmail.com</span>
        </p>

        <p>
          <a 
            href="https://github.com/faizackhan"
            className="text-[rgb(138,198,255)] text-3xl hover:text-[rgb(255,200,255)] transition"
            target="_blank"
          >
            Github →
          </a>
        </p>

        <p>
          <a 
            href="https://www.linkedin.com/in/faiza-khanc/"
            className="text-[rgb(132,198,255)] text-3xl hover:text-[rgb(254,200,255)] transition"
            target="_blank"
          >
            LinkedIn →
          </a>
        </p>
      </div>
    </div>
  )}
      </div>
    </div>
  );
}
