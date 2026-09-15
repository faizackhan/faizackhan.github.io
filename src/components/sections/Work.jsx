const PROJECTS = [
  {
    title: "Machine Learning",
    description: "Small experiments that turn raw data into useful ideas.",
    tag: "data science · exploring",
    tone: "work-card-strong",
    href: "#",
  },
  {
    title: "Interaction Design",
    description: "Human-centered studies of how interfaces can feel more intuitive.",
    tag: "ui/ux · exploring",
    tone: "work-card-light",
    href: "#",
  },
  {
    title: "Front-End Builds",
    description: "Playful prototypes where visual systems meet working code.",
    tag: "development · exploring",
    tone: "work-card-mid",
    href: "#",
  },
  {
    title: "Data Stories",
    description: "Visual narratives for asking better questions of complex information.",
    tag: "visualization · exploring",
    tone: "work-card-pale",
    href: "#",
  },
];

function ProjectCard({ item }) {
  return (
    <a className="work-card" href={item.href}>
      <div className={`work-card-art ${item.tone}`}>
        <span className="work-card-shape work-card-shape-sm" />
        <span className="work-card-shape work-card-shape-md" />
        <span className="work-card-shape work-card-shape-lg" />
      </div>
      <div className="work-card-body">
        <h3 className="work-card-title">{item.title}</h3>
        <p className="work-card-desc">{item.description}</p>
        <p className="work-card-tag">{item.tag}</p>
      </div>
    </a>
  );
}

export default function Work() {
  return (
    <div className="work-section">
      <div className="work-header">
        <p className="work-eyebrow">my work</p>
        <p className="work-subhead">exploring data, design, and code</p>
      </div>
      <div className="work-grid">
        {PROJECTS.map((item) => (
          <ProjectCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}