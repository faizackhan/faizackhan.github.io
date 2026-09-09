import { useEffect, useRef, useState } from "react";

export default function Footer({ theme, setTheme }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const landing = document.querySelector(".landing-section");
    if (!landing) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // hide footer while landing section is in view, show once scrolled past
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(landing);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className={`footer ${visible ? "footer-visible" : "footer-hidden"}`}>
      <div className="footer-divider" />
      <div className="footer-inner">
        <p className="footer-text">faiza.khanc.github.io</p>

        <div className="footer-center">
          <span className="footer-text">contact : </span>
          <a href="https://www.linkedin.com/in/faiza-khanc/" target="_blank" rel="noopener noreferrer" className="footer-link">linkedin</a>
          <span className="footer-sep"> | </span>
          <a href="https://github.com/faizackhan" target="_blank" rel="noopener noreferrer" className="footer-link">github</a>
          <span className="footer-sep"> | </span>
          <a href="mailto:faizakhanc@gmail.com" className="footer-link">email</a>
          <span className="footer-sep"> | </span>
          <a href="/Faiza_Khan_Resume_2026 (4).pdf" target="_blank" rel="noopener noreferrer" className="footer-link">resume</a>
        </div>

        <div className="footer-theme">
          <span className="footer-text">theme: </span>
          <button className={`footer-theme-btn ${theme === "dark" ? "active" : ""}`} onClick={() => setTheme("dark")}>dark</button>
          <span className="footer-sep"> | </span>
          <button className={`footer-theme-btn ${theme === "light" ? "active" : ""}`} onClick={() => setTheme("light")}>light</button>
        </div>
      </div>
    </footer>
  );
}