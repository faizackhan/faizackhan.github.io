import React, { useState } from "react";
import "./FolderButton.css";
import avatar from "../assets/avatar.png";
import DraggableModal from "./DraggableModal";
import creditRiskImg from "../assets/project-images/creditRiskProject.png";
import smartAirImg from "../assets/project-images/SmartAirProject.png";
import f1Img from "../assets/project-images/F1Project.png";
import windIcon from "../assets/icons/weather/wind.svg";
import cardIcon from "../assets/icons/e-commerce/card.svg";
import resumeIcon from "../assets/icons/interface/doc.svg";
import mailIcon from "../assets/icons/interface/mail-surprise.svg";
import userIcon from "../assets/icons/misc/bot.svg";
import linkedinIcon from "../assets/icons/logos/linkedin.svg";
import trendUpIcon from "../assets/icons/finance/trend-up.svg";
import javaIcon from "../assets/icons/misc/coffee-cup-2.svg";
import javascriptIcon from "../assets/icons/misc/coffee-cup-1.svg";
import chipIcon from "../assets/icons/misc/chip.svg";
import cIcon from "../assets/icons/misc/automation.svg";
import rocketIcon from "../assets/icons/misc/rocket.svg";
import trophyIcon from "../assets/icons/misc/trophy.svg";
import serverIcon from "../assets/icons/misc/server.svg";
import fireIcon from "../assets/icons/misc/fire.svg";
import codeIcon from "../assets/icons/files/file-code.svg";
import listIcon from "../assets/icons/files/file-list.svg";
import notesIcon from "../assets/icons/files/file-notes.svg";
import spreadsheetIcon from "../assets/icons/files/file-spreadsheet.svg";
import figmaIcon from "../assets/icons/files/file-figma.svg";
import textIcon from "../assets/icons/files/file-text.svg";
import vectorIcon from "../assets/icons/files/file-vector.svg";
import cakeIcon from "../assets/icons/misc/bug.svg";
import tapIcon from "../assets/icons/hand gestures/tap-1.svg";
import flaskIcon from "../assets/icons/health/flask-round.svg";
import puzzleIcon from "../assets/icons/interface/puzzle.svg";
import puzzle2Icon from "../assets/icons/interface/puzzle-2.svg";
import atIcon from "../assets/icons/interface/at-the-rate.svg";




import {
  SiReact, SiPython, SiC, SiCplusplus, SiJavascript, 
  SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiNextdotjs, SiNodedotjs,
  SiVite, SiJupyter, SiPandas, SiNumpy, SiFigma, SiCanva, SiJira, SiFirebase, SiAndroid, SiLatex
} from "react-icons/si";

const skills = [
  { name: "Python", icon: flaskIcon },
  { name: "C", icon: puzzleIcon},
  { name: "C++", icon: puzzle2Icon },
  { name: "Java", icon: javaIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "TypeScript", icon: codeIcon },
  { name: "HTML5", icon: codeIcon },
  { name: "CSS3", icon: codeIcon },
  { name: "Tailwind CSS", icon: cIcon },
  { name: "Next.js", icon: rocketIcon },
  { name: "Node.js", icon: trophyIcon },
  { name: "Vite", icon: chipIcon },
  { name: "Git", icon: rocketIcon },
  { name: "Jupyter", icon: listIcon },
  { name: "Pandas", icon: spreadsheetIcon },
  { name: "NumPy", icon: textIcon},
  { name: "MatPlotLib", icon: vectorIcon},
  { name: "Figma", icon: figmaIcon },
  { name: "Canva", icon: cakeIcon },
  { name: "Jira", icon: serverIcon },
  { name: "Firebase", icon: fireIcon },
  { name: "Android", icon: userIcon},
  { name: "LaTeX", icon: notesIcon },
  { name: "React", icon: tapIcon }
];

const projects = [
  {
    id: "creditRiskProject",
    title: "Credit Risk Data Analysis",
    icon: cardIcon,
    image: creditRiskImg,
    description:
      "Exploratory data analysis on LendingClub loans, focusing on default risk and borrower behavior.",
    link: "https://github.com/faizackhan/credit-risk-eda",
  },
  {
    id: "SmartAirProject",
    title: "Smart-Air: CSCBO7 Software Design Project",
    icon: windIcon,
    image: smartAirImg,
    description:
      "Android + Firebase app for asthma management with role-based dashboards and PDF report export.",
    link: "https://github.com/faizackhan/smart-air",
  },
  {
    id: "F1Project",
    title: "Las Vegas F1 Comp Analysis",
    icon: trendUpIcon,
    image: f1Img,
    description:
      "Comparative data analysis of Las Vegas F1 performance metrics presented in a workshop setting.",
    link: "https://docs.google.com/presentation/d/1QKOeUSfeGXyQU73GX4RUZC13FOpFfh8xKm9WJOvH9Tw",
  },
];


export default function FolderButton({ theme }) {
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

  const [activeProject, setActiveProject] = useState(null);

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

          {/* CONTENT SCALER*/}
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
                <h2 className="text-4xl mb-4">Projects</h2>

                <ul className="space-y-2">
                  {projects.map((project) => (
                    <li key={project.id}>
                      <button
                        onClick={() => setActiveProject(project)}
                        className="hover:underline text-left"
                      >
                        <span className="flex items-center gap-3">
                        {project.title}
                        <span className="project-icon flex items-center justify-center w-10 h-10">
                        {typeof project.icon === "string" ? (
                        <img
                          src={project.icon}
                          alt=""
                          className="w-8 h-8 project-svg"
                          draggable="false"
                        />
                      ) : (
                        <span className="text-3xl">{project.icon}</span>
                      )}
                      </span>

                        </span>

                      </button>
                    </li>
                    ))}
                </ul>
              </div>
            )}

            {/* SKILLS */}
            {activeTab === "Skills" && (
              <div className="text-1xl mb-2">
                <h2 className="text-2xl mb-6 font-bold">Skills</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {skills.map((skill, index) => (
                      <div
                      key={index}
                      className="
                        skill-card
                        flex flex-col items-center justify-center p-4
                        rounded-xl bg-white/10 backdrop-blur-md
                        shadow-md
                        transition-all duration-300
                        "
                      >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className="skill-svg mb-2"
                        draggable={false}
                      />
                      <p className="text-2xl text-center w-full">{skill.name}</p>
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
                    <span className="year ">2024</span>
                    <p>VP of Quantitative AI & Fintech Society - UofT</p>
                  </div>
                  <div className="timeline-item">
                    <span className="year"> 2025</span>
                    <p>Finance Member of AMACSS - UofT</p>
                  </div>
                </div>
              </div>
            )}

            {/* CONTACT */}
            {activeTab === "Contact" && (
                <div className="page contact-page p-8">
                <h2 className="text-4xl mb-10 font-bold">Contact Me!</h2>

                <div className="contact-info flex flex-col gap-8 items-center">

                  {/* GitHub */}
                  <a
                    href="https://github.com/faizackhan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-5xl hover:opacity-80 transition"
                  >
                    <img
                        src={userIcon}
                        alt=""
                        className="w-8 h-8 project-svg"
                        draggable="false"
                      />
                      <span>GitHub</span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/faiza-khanc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-5xl hover:opacity-80 transition"
                  >
                    <img
                        src={linkedinIcon}
                        alt=""
                        className="w-8 h-8 project-svg"
                        draggable="false"
                      />
                      <span>LinkedIn</span>
                  </a>

                  {/* Email */}
                  <a
                    className="flex items-center gap-1 text-5xl hover:opacity-80 transition"
                  >
                    <img
                        src={mailIcon}
                        alt=""
                        className="w-8 h-8 project-svg"
                        draggable="false"
                      />
                      <span>faizakhanc</span>
                      <img
                        src={atIcon}
                        alt=""
                        className="w-6 h-6 project-svg"
                        draggable="false"
                      />
                      <span>gmail.com</span>
                  </a>

                  {/* Resume */}
                  <a
                    className="flex items-center gap-4 text-5xl hover:opacity-80 transition"
                  >
                      <img
                        src={resumeIcon}
                        alt=""
                        className="w-8 h-8 project-svg"
                        draggable="false"
                      />
                      <span>resume!</span>
                  </a>

                </div>
              </div>
            )}


            {activeProject && (
              <DraggableModal

                title={activeProject.title}
                theme={theme}
                onClose={() => setActiveProject(null)}
              >
                {activeProject.image && (
                  <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-full rounded-lg mb-4 border border-white/20"
                  />
                )}
                <p>{activeProject.description}</p>

                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline mt-2 inline-block"
                >
                  View project →
                </a>
            </DraggableModal>

            
            )}
          </div> 
        </div> 
      </div> 
    </div>
  );
}
