const EXPERIENCES = [
  {
    title: "Co-op - MakerKids",
    detail: "Teaching robotics, Minecraft Education & CodeSpark curriculum",
  },
  {
    title: "Teaching Assistant",
    detail: "University of Toronto",
  },
  {
    title: "B.Sc. Statistics",
    detail: "Data Science & Machine Learning, University of Toronto",
  },
  {
    title: "VP of Technology - Data Science & Statistics Society",
    detail: "University of Toronto",
  },
  {
    title: "VP of Technology - Computer Science Enrichment Club",
    detail: "University of Toronto",
  },
  {
    title: "President & Founder - Prototype",
    detail: "University of Toronto",
  }
];

export default function Experience() {
  return (
    <div className="experiences-main">
      <h2 className="about-heading">experience</h2>
      <div className="experience-cards">
        {EXPERIENCES.map((exp) => (
          <div key={exp.title} className="experience-card">
            <p className="experience-card-title">
              <strong>{exp.title}</strong>
              <br />
              {exp.detail}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}