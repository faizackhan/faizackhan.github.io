export default function Footer({ theme, setTheme }) {
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <footer className="footer">
      <div className="footer-divider" />
      <div className="footer-inner">
        <p className="footer-text">faiza.khanc.github.io</p>

        <div className="footer-center">
          <a className="footer-link" href="https://github.com/faizackhan" target="_blank" rel="noreferrer">
            github
          </a>
          <span className="footer-sep">·</span>
          <a className="footer-link" href="https://www.linkedin.com/in/faiza-khanc" target="_blank" rel="noreferrer">
            linkedin
          </a>
          <span className="footer-sep">·</span>
          <a className="footer-link" href="https://devpost.com" target="_blank" rel="noreferrer">
            devpost
          </a>
          <span className="footer-sep">·</span>
          <a className="footer-link" href="/public/Faiza_Khan_Resume_2026 (4).pdf" target="_blank" rel="noreferrer">
            resume
          </a>
          <span className="footer-sep">·</span>
          <a className="footer-link" href="mailto:hello@example.com">
            email
          </a>
        </div>

        <div className="footer-theme">
          <button
            className={`footer-theme-btn ${theme === "light" ? "active" : ""}`}
            onClick={() => setTheme("light")}
          >
            light
          </button>
          <span className="footer-sep">|</span>
          <button
            className={`footer-theme-btn ${theme === "dark" ? "active" : ""}`}
            onClick={() => setTheme("dark")}
          >
            dark
          </button>
        </div>
      </div>
    </footer>
  );
}