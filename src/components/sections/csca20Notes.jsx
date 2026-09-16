import ideasInProgress from "/src/assets/Ideas In Progress.jpeg";

const WEEKS = Array.from({ length: 11 }, (_, i) => ({
  label: `Week ${i}`,
  href: i === 0 ? "/project-files/tutorial_slides.pdf" : ideasInProgress,
}));

export default function CSCA20Notes() {
  return (
    <div className="notes-tab">
      <h2 className="about-heading">csca20 notes</h2>
      <div className="week-buttons">
        {WEEKS.map((week) => (
          
            <a key={week.label}
            className="week-btn"
            href={week.href}
            target="_blank"
            rel="noreferrer"
          >
            {week.label}
          </a>
        ))}
      </div>
    </div>
  );
}