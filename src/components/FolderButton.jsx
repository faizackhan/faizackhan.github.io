import React, { useState } from "react";
import "./FolderButton.css";
import avatar from "../assets/avatar.png";



import {
  SiReact, SiPython, SiC, SiCplusplus, SiJavascript, 
  SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiNextdotjs, SiNodedotjs,
  SiVite, SiJupyter, SiPandas, SiNumpy, SiFigma, SiCanva, SiJira, SiFirebase, SiAndroid, SiLatex
} from "react-icons/si";

const skills = [
  { name: "Python", icon: <SiPython /> },
  { name: "C", icon: <SiC /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Vite", icon: <SiVite /> },
  { name: "Jupyter", icon: <SiJupyter /> },
  { name: "Pandas", icon: <SiPandas /> },
  { name: "NumPy", icon: <SiNumpy /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Canva", icon: <SiCanva /> },
  { name: "Jira", icon: <SiJira /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Android", icon: <SiAndroid /> },
  { name: "LaTeX", icon: <SiLatex /> },
  { name: "React", icon: <SiReact /> }
];

export default function FolderButton() {
  const [activeTab, setActiveTab] = useState("About Me");

  const getPageColor = () => {
    switch (activeTab) {
      case "About Me": return "var(--page1)";
      case "Projects": return "var(--page2)";
      case "Skills": return "var(--page3)";
      case "Experience": return "var(--page4)";
      case "Contact": return "var(--page5)";
      default: return "var(--page1)";
    }
  };

  const getTextColor = () => {
    switch (activeTab) {
      case "About Me": return "var(--tabfont1)";
      case "Projects": return "var(--tabfont2)";
      case "Skills": return "var(--tabfont3)";
      case "Experience": return "var(--tabfont4)";
      case "Contact": return "var(--tabfont5)";
      default: return "var(--tabfont1)";
    }
  };

  const tabs = ["About Me", "Projects", "Skills", "Experience", "Contact"];

  return (
    <div className="ui-scaler"> 
      <div className="folder-container">

        {/* TABS */}
        <nav id="tabs">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`folder-tab ${activeTab === tab ? "selected" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              <span>{tab}</span>
            </div>
          ))}
        </nav>

        {/* PAGE CONTENT */}
        <div
          id="page"
          style={{
            background: getPageColor(),
            color: getTextColor(),
          }}
        >

          {/* CONTENT SCALER — keeps content inside the box */}
          <div className="content-scaler">

            {/* ABOUT ME */}
            {activeTab === "About Me" && (
              <div className="page about-page">
                <div className="about-container">
                  <img src={avatar} alt="Faiza Khan" className="about-avatar" />
                  <div className="about-text">
                    <h2>About Me</h2>
                    <p>
                      Hi! I’m <b>Faiza Khan</b>, I'm a statistics specialist student at University of Toronto and an aspiring
                      data scientist. I have a passion for analyzing data and presenting it in a digestible format, as well as uncovering meaning insights from complex datasets.
                    </p>
                    <p>
                      Beyond academics, I enjoy creating music, baking, and indulging in creative pursuits such as web dev, and painting.
                    </p>
                  </div>
                </div>
              </div>
            )}
            {/* PROJECTS */}
            {activeTab === "Projects" && (
              <div className="page projects-page">
                <h2 className="text-4xl mb-4 text-white">Projects</h2>

                <ul className="space-y-2">
                  <li>
                    <a
                      href="https://github.com/faizackhan/credit-risk-eda/blob/main/README.md"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white-300 hover:underline"
                    >
                      Credit Risk Data Analysis – 2025
                    </a>
                  </li>

                  <li>
                  <a
                      href="https://github.com/faizackhan/smart-air/blob/main/README.md"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:underline"
                    >
                      Smart-Air: CSCBO7 Software Design Project – 2025
                    </a>
                  </li>

                  <li>
                  <a
                      href="https://docs.google.com/presentation/d/1QKOeUSfeGXyQU73GX4RUZC13FOpFfh8xKm9WJOvH9Tw/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:underline"
                    >
                      Las Vegas F1 Comp Analysis – UofT Workshop 2024
                    </a>
                  </li>
                </ul>
              </div>
            )}


            {/* SKILLS */}
            {activeTab === "Skills" && (
              <div className="text-1xl text-white mb-2">
                <h2 className="text-6xl mb-6 text-white font-bold">Skills</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center p-4 
                                 rounded-xl bg-white/10 backdrop-blur-md 
                                 shadow-md hover:shadow-purple-400/40 
                                 hover:bg-white/20 transition-all duration-300"
                    >
                      <div className="text-5xl text-white mb-1">
                        {skill.icon}
                      </div>
                      <p className="text-2xl text-white">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* EXPERIENCE */}
            {activeTab === "Experience" && (
              <div className="page experience-page">
                <h2 className="text-4xl mb-4">Experience</h2>
                <div className="timeline">
                  <div className="timeline-item">
                    <span className="year">2024</span>
                    <p>VP of Quantitative AI & Fintech Society - UofT</p>
                  </div>
                  <div className="timeline-item">
                    <span className="year">2025</span>
                    <p>Finance Member of AMACSS - UofT</p>
                  </div>
                </div>
              </div>
            )}

            {/* CONTACT */}
            {activeTab === "Contact" && (
              <div className="page contact-page p-8 text-white">
                <h2 className="text-4xl mb-6 font-bold">Contact Me</h2>

                <div className="contact-info space-y-4 text-xl">
                  <span className="text-blue-200 text-4xl">Email: faizakhanc@gmail.com</span>

                  <p>
                    <a href="https://github.com/faizackhan"
                      className="text-blue-300 text-4xl hover:text-pink-200 transition"
                      target="_blank">
                      Github →
                    </a>
                  </p>

                  <p>
                    <a href="https://www.linkedin.com/in/faiza-khanc/"
                      className="text-blue-300 text-4xl hover:text-pink-200 transition"
                      target="_blank">
                      LinkedIn →
                    </a>
                  </p>
                </div>
              </div>
            )}
          </div> 

        </div> 

      </div> 
    </div>
  );
}
