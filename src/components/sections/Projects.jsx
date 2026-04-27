import { useRef, useState } from "react";

import placeholder_cover from "../../assets/project-covers/placeholder-cover.png";

import website_cover from "../../assets/project-covers/personalweb-cover.png";
import studyNook_cover from "../../assets/project-covers/studynook-cover.png";
import smartAir_cover from "../../assets/project-covers/smartair-cover.png";

import creditRisk_cover from "../../assets/project-covers/credit-cover.png";
import f1_cover from "../../assets/project-covers/f1-cover.png";
import school_cover from "../../assets/project-covers/schoolproj-cover.png";
import celestial_cover from "../../assets/project-covers/celestial-cover.png";
import worldCup_cover from "../../assets/project-covers/worldcup-cover.png";
import salon_cover from "../../assets/project-covers/salon-cover.png";
import periodicTbl_cover from "../../assets/project-covers/periodic-cover.png";


import qaifs_cover from "../../assets/project-covers/marketing-cover.png";
import numberGame_cover from "../../assets/project-covers/numbers-cover.png";

const projectCategories = {
  "web applications": [
    {
      id: "personalWebsite",
      title: "Personal Website",
      image: website_cover,
      description:
        "A portfolio site designed and built to showcase projects, skills, and experience.",
      link: "https://github.com/faizackhan/faizackhan.github.io",
    },
    {
      id: "SurveyFormProject",
      title: "Survey Form Project",
      image: placeholder_cover,
      description:
        "This project is a custom survey form built to collect feedback,\
         preferences, and user experiences from visitors.\
         It includes interactive form elements such as text inputs, email validation,\
          number fields, dropdown menus, radio buttons, checkboxes, and a comment section.\
           The project focuses on creating a clean, user-friendly interface while applying\
            strong HTML form structure, accessibility, and responsive design principles.",
      link: "https://github.com/faizackhan",
    }
  ],
  mobile: [
    {
      id: "smartAirProject",
      title: "Smart-Air",
      image: smartAir_cover,
      description:
        "Android + Firebase app for asthma management with role-based dashboards and PDF report export.",
      link: "https://github.com/faizackhan/smart-air",
    },
    {
      id: "studynook",
      title: "StudyNook",
      image: studyNook_cover,
      description:
        "AI study planner that helps students organize tasks and manage study time.",
      link: "#",
    },
  ],
  "data science & ml": [
    {
      id: "creditRiskProject",
      title: "Credit Risk Data Analysis",
      image: creditRisk_cover,
      description:
        "Exploratory data analysis on LendingClub loans, focusing on default risk and borrower behavior.",
      link: "https://github.com/faizackhan/credit-risk-eda",
    },
    {
      id: "f1Project",
      title: "Las Vegas F1 Comp Analysis",
      image: f1_cover,
      description:
        "Comparative data analysis of Las Vegas F1 performance metrics presented in a workshop setting.",
      link: "https://docs.google.com/presentation/d/1QKOeUSfeGXyQU73GX4RUZC13FOpFfh8xKm9WJOvH9Tw",
    },
    {
      id: "staa57CourseProject",
      title: "STAA57 Course Project",
      image: school_cover,
      description:
        "Course-based statistical analysis project focused on comparing race performance data and presenting findings clearly.",
      link: "https://github.com/faizackhan/STAA57-Project",
    },
    {
      id: "celestialBodiesProject",
      title: "Celestial Bodies Database",
      image: celestial_cover,
      description:
        "Built a database of celestial bodies using PostgreSQL",
      link: "https://github.com/faizackhan",
    },
    {
      id: "WorldCupProject",
      title: "World Cup Database",
      image: worldCup_cover,
      description:
        "a Bash script that enters information from World Cup games into PostgreSQL, then query the database for useful statistics.",
      link: "https://github.com/faizackhan",
    },
    {
      id: "SalonAppointmentProject",
      title: "Salon Appointment Database",
      image: salon_cover,
      description:
        "An interactive Bash program that uses PostgreSQL to track the customers and appointments for your salon.",
      link: "https://github.com/faizackhan",
    },
    {
      id: "periodictableProject",
      title: "Periodic Table Database",
      image: periodicTbl_cover,
      description:
        "Bash script to get information about chemical elements from a periodic table database.",
      link: "https://github.com/faizackhan",
    }
  ],
  javascript: [
    {
      id: "markdowntohtmlProject",
      title: "markdown-to-html converter",
      image: placeholder_cover,
      description:
        "fill in later",
      link: "https://github.com/faizackhan",
    },
    {
      id: "drummachineProject",
      title: "Drum Machine",
      image: placeholder_cover,
      description:
        "fill in later",
      link: "https://github.com/faizackhan",
    },
    {
      id: "votingsystemProject",
      title: "Voting System",
      image: placeholder_cover,
      description:
        "fill in later",
      link: "https://github.com/faizackhan",
    },
    {
      id: "bankaccountProject",
      title: "Bank Account Manager",
      image: placeholder_cover,
      description:
        "fill in later",
      link: "https://github.com/faizackhan",
    },
    {
      id: "weatherappProject",
      title: "Weather App",
      image: placeholder_cover,
      description:
        "fill in later",
      link: "https://github.com/faizackhan",
    }
  ],
  frontend: [
    {
      id: "currencyConverterProject",
      title: "Currency Converter",
      image: placeholder_cover,
      description:
        "fill in later",
      link: "https://github.com/faizackhan",
    },
    {
      id: "tictactoeProject",
      title: "Tic-Tac-Toe Game",
      image: placeholder_cover,
      description:
        "fill in later",
      link: "https://github.com/faizackhan",
    }
  ],
  backend: [
    {
      id: "blankProject",
      title: "untitled project",
      image: placeholder_cover,
      description:
        "fill in later",
      link: "https://github.com/faizackhan",
    }
  ],
  "ui & ux": [
    {
      id: "designPortfolioProject",
      title: "Design Portfolio",
      image: placeholder_cover,
      description:
        "fill in later",
      link: "https://github.com/faizackhan",
    }
  ],
  other: [
    {
      id: "qaifsMarketing",
      title: "Marketing Strategy @ QAIFS",
      image: qaifs_cover,
      description:
        "Campaign planning and branding strategy work focused on outreach, engagement, and event visibility.",
      link: "https://www.instagram.com/qaifs.ut/",
    },
    {
      id: "NumberGuessingGameProject",
      title: "Number Guessing Game",
      image: numberGame_cover,
      description:
        "A number guessing game that runs in the terminal and saves user information.",
      link: "https://github.com/faizackhan",
    },
    {
      id: "configmanagerProject",
      title: "Configuration Manager",
      image: placeholder_cover,
      description:
        "A tool for managing and configuring application settings.",
      link: "https://github.com/faizackhan",
    },
    {
      id: "budgetappProject",
      title: "Budget App",
      image: placeholder_cover,
      description:
        "A simple budgeting app to track expenses and income.",
      link: "https://github.com/faizackhan",
    },
    {
      id: "polygonAreaCalculatorProject",
      title: "Polygon Area Calculator",
      image: placeholder_cover,
      description:
        "A tool for calculating the area of various polygon shapes.",
      link: "https://github.com/faizackhan",
    },
    {
      id: "hashtableProject",
      title: "Hash Table Implementation",
      image: placeholder_cover,
      description:
        "A custom implementation of a hash table data structure.",
      link: "https://github.com/faizackhan",
    },
    {
      id: "hanoiTowersProject",
      title: "Hanoi Towers",
      image: placeholder_cover,
      description:
        "A implementation of the classic Hanoi Towers puzzle.",
      link: "https://github.com/faizackhan",
    }
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