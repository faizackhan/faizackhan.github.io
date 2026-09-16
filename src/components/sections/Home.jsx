import minimalProjGif from "/src/assets/minimal-proj.gif";


const NAV_LINKS = [
  { key: "Projects", label: "work", id: "projects" },
  { key: "About", label: "about", id: "about" },
  { key: "Skills", label: "skills", id: "skills" },
  { key: "Experience", label: "experience", id: "experience" },
  { key: "CSCA20", label: "fun", id: "csca20" },
  { key: "Contact", label: "contact", id: "contact" },
];

const WORK_ITEMS = [
  {
    description: "Data Science",
    tag: "data science · exploring",
    tone: "work-card-strong",
    thumbnail: minimalProjGif
  },
  {
    description: "Interaction Design",
    tag: "ui/ux · exploring",
    tone: "work-card-light",
    thumbnail: minimalProjGif
  },
  {
    description: "Software Development",
    tag: "development · exploring",
    tone: "work-card-mid",
    thumbnail: minimalProjGif
  },
  {
    description: "Machine Learning",
    tag: "visualization · exploring",
    tone: "work-card-pale",
    thumbnail: minimalProjGif
  },
];

const EXPLORING = [
  { label: "data science", detail: "finding practical patterns" },
  { label: "ui/ux design", detail: "designing clear interactions" },
  { label: "machine learning", detail: "building curious prototypes" },
];

function WorkCard({ item, onClick }) {
  return (
    <button className="work-card" onClick={onClick}>
      <div className={`work-card-art ${item.tone}`}>
        {item.thumbnail ? (
          <img className="work-card-thumb" src={item.thumbnail} alt={`${item.title} preview`} />
        ) : (
          <>
            <span className="work-card-shape work-card-shape-sm" />
            <span className="work-card-shape work-card-shape-md" />
            <span className="work-card-shape work-card-shape-lg" />
          </>
        )}
      </div>
      <div className="work-card-body">
        <h3 className="work-card-title">{item.title}</h3>
        <p className="work-card-desc">{item.description}</p>
        <p className="work-card-tag">{item.tag}</p>
      </div>
    </button>
  );
}

export default function LandingPage({ activeSection, setActiveSection, theme, setTheme }) {
  const scrollTo = (key, id) => {
    setActiveSection(key);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <div className="landing-page">
      <div className="landing-nav-bar">
      </div>

      {/* hero */}
      <section className="landing-hero">
        <div className="landing-content">
          <h1 className="landing-title">
            i'm faiza, i like to build the bridge between{" "}
            <span className="title-italic">data science, software, &amp; design.</span>
          </h1>
          <p className="landing-body">
            I also like UI/UX and interaction design, machine learning, and
            front-end development — where data, design, and thoughtful
            interfaces meet.
          </p>
        </div>

        <div className="landing-exploring">
          <p className="landing-exploring-label">what i'm exploring</p>
          <ul className="landing-exploring-list">
            {EXPLORING.map((item, i) => (
              <li key={item.label} className="landing-exploring-item">
                <span className="landing-exploring-index">0{i + 1}</span>
                <span>
                  {item.label} <span className="landing-exploring-sep">·</span> {item.detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* work */}
      <section className="work-section">
        <div className="work-header">
          <p className="work-eyebrow">my work</p>
          <p className="work-subhead">exploring data, design, and code</p>
        </div>
        <div className="work-grid">
          {WORK_ITEMS.map((item) => (
            <WorkCard key={item.title} item={item} onClick={() => scrollTo("Projects", "projects")} />
          ))}
        </div>
      </section>

      {/* cta */}
      <section className="cta-section">
        <h2 className="cta-title">ready to collaborate?</h2>
        <button className="cta-link" onClick={() => scrollTo("Contact", "contact")}>
          say hello <span aria-hidden>→</span>
        </button>
      </section>
      
    </div>
  );
}