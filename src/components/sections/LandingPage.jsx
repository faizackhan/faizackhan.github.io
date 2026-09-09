export default function LandingPage({ menuOpen, onToggleMenu }) {
  const handleScrollDown = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="landing-section">
      <button
        className="hamburger-btn"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={onToggleMenu}
      >
        <span className="hamburger-line" />
        <span className="hamburger-line" />
        <span className="hamburger-line" />
      </button>

      <div className="landing-card">
        <div className="landing-content">
          <h1 className="landing-title">
            <span className="title-regular">hi, i'm </span>
            <span className="title-italic">faiza</span>
          </h1>
          <p className="landing-subtitle">AN ASPIRING DATA SCIENTIST</p>
          <p className="landing-interests">
            Other interests are, ui/ux, machine learning, math
          </p>
        </div>

        <div className="landing-footer">
          <nav className="landing-nav">
            <a href="#about" onClick={(e) => { e.preventDefault(); handleScrollDown(); }} className="landing-nav-link">about me!</a>
            <span className="landing-nav-sep"> | </span>
            <a href="#about" onClick={(e) => { e.preventDefault(); handleScrollDown(); }} className="landing-nav-link">my work!</a>
          </nav>
        </div>
      </div>
    </section>
  );
}