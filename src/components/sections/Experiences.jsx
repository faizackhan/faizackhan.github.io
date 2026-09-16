const MONTH_NUM = {
  Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
  Jul: "07", Aug: "08", Sept: "09", Oct: "10", Nov: "11", Dec: "12",
};

const EXPERIENCES = [
  {
    title: "MakerKids",
    detail: "Teaching robotics, Minecraft Education & Scratch curriculum.",
    month: "Aug",
    year: "2026",
    current: true,
  },
  {
    title: "Teaching Assistant CSCA20",
    detail: "University of Toronto.",
    month: "Sept",
    year: "2026",
  },
  {
    title: "VP of Technology — Data Science & Statistics Society",
    detail: "University of Toronto.",
    month: "Aug",
    year: "2026",
  },
  {
    title: "VP of Technology — Computer Science Enrichment Club",
    detail: "University of Toronto.",
    month: "May",
    year: "2026",
  },
  {
    title: "President & Founder — Prototype",
    detail: "University of Toronto.",
    month: "May",
    year: "2026",
  },
  {
    title: "Director of Special Events — AMACSS",
    detail: "University of Toronto.",
    month: "May",
    year: "2026",
  },
  {
    title: "Finance Associate",
    detail: "University of Toronto.",
    month: "Sept",
    year: "2025",
  },
  {
    title: "B.Sc. Statistics",
    detail: "Data Science & Machine Learning, University of Toronto.",
    month: "Sept",
    year: "2024",
  },
];

export default function Experience() {
  return (
    <div className="experiences-main">
      <p className="timeline-eyebrow">history</p>
      <h2 className="about-heading">experience</h2>

      <div className="timeline2">
        {EXPERIENCES.map((exp, i) => {
          const side = i % 2 === 0 ? "right" : "left";
          return (
            <div className={`timeline2-row timeline2-row-${side}`} key={exp.title}>
              <div className="timeline2-content">
                <p className="timeline2-title">{exp.title}</p>
                <p className="timeline2-detail">{exp.detail}</p>
              </div>

              <div className="timeline2-spine">
                <span className={`timeline2-pill ${exp.current ? "current" : ""}`}>
                  {MONTH_NUM[exp.month]} - {exp.year}
                </span>
                <span className={`timeline2-line ${exp.current ? "current" : ""}`} />
              </div>

              <div className="timeline2-empty" />
            </div>
          );
        })}
      </div>
    </div>
  );
}