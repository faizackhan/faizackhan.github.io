const weeks = Array.from({ length: 11 }, (_, i) => i + 1);

export default function CSCA20Notes() {
  return (
    <div className="notes-tab">
      <h2 className="about-heading text-center">csca20</h2>
      <div className="week-buttons">
        {weeks.map((week) => (
          <a
            key={week}
            href="https://github.com/faizackhan/csca20-notes"
            className="week-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Week {week}
          </a>
        ))}
      </div>
    </div>
  );
}