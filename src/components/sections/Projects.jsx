import { useRef, useState } from "react";
import creditRiskImg from "../../assets/project-images/creditRiskProject.png";
import smartAirImg from "../../assets/project-images/SmartAirProject.png";
import f1Img from "../../assets/project-images/F1Project.png";
import avatarImg from "../../assets/avatarv2.png";
import studyNookImg from "../../assets/project-images/studynook_logo.png";

const projectCategories = {
  "web applications": [
    {
      id: "personalWebsite",
      title: "Personal Website",
      image: avatarImg,
      description:
        "A portfolio site designed and built to showcase projects, skills, and experience.",
      link: "https://github.com/faizackhan/faizackhan.github.io",
    },
  ],
  mobile: [
    {
      id: "smartAirProject",
      title: "Smart-Air",
      image: smartAirImg,
      description:
        "Android + Firebase app for asthma management with role-based dashboards and PDF report export.",
      link: "https://github.com/faizackhan/smart-air",
    },
    {
      id: "studynook",
      title: "StudyNook",
      image: studyNookImg,
      description:
        "AI study planner that helps students organize tasks and manage study time.",
      link: "#",
    },
  ],
  "data science & ml": [
    {
      id: "creditRiskProject",
      title: "Credit Risk Data Analysis",
      image: creditRiskImg,
      description:
        "Exploratory data analysis on LendingClub loans, focusing on default risk and borrower behavior.",
      link: "https://github.com/faizackhan/credit-risk-eda",
    },
    {
      id: "f1Project",
      title: "Las Vegas F1 Comp Analysis",
      image: f1Img,
      description:
        "Comparative data analysis of Las Vegas F1 performance metrics presented in a workshop setting.",
      link: "https://docs.google.com/presentation/d/1QKOeUSfeGXyQU73GX4RUZC13FOpFfh8xKm9WJOvH9Tw",
    },
    {
      id: "staa57CourseProject",
      title: "STAA57 Course Project",
      image: null,
      description:
        "Course-based statistical analysis project focused on comparing race performance data and presenting findings clearly.",
      link: "https://github.com/faizackhan/STAA57-Project",
    },
  ],
  other: [
    {
      id: "qaifsMarketing",
      title: "Marketing Strategy @ QAIFS",
      image: null,
      description:
        "Campaign planning and branding strategy work focused on outreach, engagement, and event visibility.",
      link: "https://www.instagram.com/qaifs.ut/",
    },
  ],
};

export default function Projects() {
  const categoryNames = Object.keys(projectCategories);
  const [activeTab, setActiveTab] = useState(categoryNames[0]);
  const carouselRef = useRef(null);

  const activeProjects = projectCategories[activeTab];

  const scrollCarousel = (direction) => {
    if (!carouselRef.current) return;

    const card = carouselRef.current.querySelector(".project-card");
    const scrollAmount = card
      ? card.offsetWidth + 24
      : carouselRef.current.offsetWidth * 0.85;

    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="section-page font-body projects-main">
      <h2 className="section-title font-heading">projects</h2>

      <div className="projects-folder-shell">
        <nav className="projects-folder-tabs">
          {categoryNames.map((category) => (
            <button
              key={category}
              type="button"
              className={`projects-folder-tab ${
                activeTab === category ? "selected" : ""
              }`}
              onClick={() => setActiveTab(category)}
            >
              <span>{category}</span>
            </button>
          ))}
        </nav>

        <div className="projects-folder-page">
          <div className="projects-folder-content">
            <div className="projects-carousel-shell">
              <button
                type="button"
                className="projects-carousel-btn left"
                onClick={() => scrollCarousel("left")}
                aria-label="Scroll projects left"
              >
                ‹
              </button>

              <div
                key={activeTab}
                className="projects-carousel"
                ref={carouselRef}
              >
                {activeProjects.map((project) => (
                    <div key={project.id} className="project-card">
                      <div className="project-card-text">

                        {project.image && (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="project-card-image"
                            draggable={false}
                          />
                        )}

                        <h3 className="project-card-title font-project-heading">
                          {project.title}
                        </h3>

                        <p className="project-card-description font-body">
                          {project.description}
                        </p>

                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-card-link font-body"
                        >
                          view project →
                        </a>
                      </div>
                    </div>
                ))}
              </div>

              <button
                type="button"
                className="projects-carousel-btn right"
                onClick={() => scrollCarousel("right")}
                aria-label="Scroll projects right"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}