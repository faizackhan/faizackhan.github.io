export const WORK_TOPICS = [
  {
    id: "machine-learning",
    title: "Machine Learning",
    description: "Small experiments that turn raw data into useful ideas.",
    tag: "data science · exploring",
    images: [
      "/src/assets/Ideas In Progress.jpeg",
      "/src/assets/Ideas In Progress.jpeg",
      "/src/assets/Ideas In Progress.jpeg"
    ],
    projects: [
      { title: "Jasmine - Email RAG Assistant", image: "/src/assets/Ideas In Progress.jpeg", link: "#" }
    ],
  },
  {
    id: "interaction-design",
    title: "Interaction Design",
    description: "Human-centered studies of how interfaces can feel more intuitive.",
    tag: "ui/ux · exploring",
    images: [
      "/src/assets/Ideas In Progress.jpeg",
      "/src/assets/Ideas In Progress.jpeg",
      "/src/assets/Ideas In Progress.jpeg"
    ],
    projects: [
      { title: "MINO - Financial Learning ios Application", image: "/src/assets/Ideas In Progress.jpeg", link: "#" },
      { title: "Design Portfolio", image: "/src/assets/Ideas In Progress.jpeg", link: "#" },
    ],
  },
  {
    id: "front-end-builds",
    title: "Software Development",
    description: "Playful prototypes where visual systems meet working code.",
    tag: "development · exploring",
    images: [
      "/src/assets/Ideas In Progress.jpeg",
      "/src/assets/Ideas In Progress.jpeg",
      "/src/assets/Ideas In Progress.jpeg"
    ],
    projects: [
      { title: "Portfolio Site v1", image: "/src/assets/Ideas In Progress.jpeg", link: "#" },
      { title: "SmartAir", image: "/src/assets/Ideas In Progress.jpeg", link: "#" },
      { title: "StudyNook", image: "/src/assets/Ideas In Progress.jpeg", link: "#" }
    ],
  },
  {
    id: "data-stories",
    title: "Data Science",
    description: "Visual narratives for asking better questions of complex information.",
    tag: "visualization · exploring",
    images: [
      "/src/assets/Ideas In Progress.jpeg",
      "/src/assets/Ideas In Progress.jpeg",
      "/src/assets/Ideas In Progress.jpeg"
    ],
    projects: [
      { title: "Credit Risk EDA: Python", image: "/src/assets/Ideas In Progress.jpeg", link: "#" },
      { title: "Education in Ontario Course: R", image: "/src/assets/Ideas In Progress.jpeg", link: "#" },
      { title: "Celestial Bodies DB: sql", image: "/src/assets/Ideas In Progress.jpeg", link: "#" },
    ],
  },
   {
    id: "programming-projects",
    title: "Simple Programming Projects",
    description: "Visual narratives for asking better questions of complex information.",
    tag: "visualization · exploring",
    images: [
      "/src/assets/Ideas In Progress.jpeg",
      "/src/assets/Ideas In Progress.jpeg",
      "/src/assets/Ideas In Progress.jpeg"
    ],
    projects: [
      
    ],
  },
  {
    id: "course-notes",
    title: "Course Notes",
    description: "Visual narratives for asking better questions of complex information.",
    tag: "visualization · exploring",
    images: [
        "/src/assets/Ideas In Progress.jpeg",
      "/src/assets/Ideas In Progress.jpeg",
      "/src/assets/Ideas In Progress.jpeg"
    ],
    projects: [
        { title: "CSCA20", image: "/src/assets/csca20.png", link: "/notes/csca20" },
    ],
  }
];

export function getTopicById(id) {
  return WORK_TOPICS.find((t) => t.id === id);
}