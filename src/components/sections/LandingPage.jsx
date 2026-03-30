import swirlIcon from "../../assets/swirlIcon.png";

export default function LandingPage({ showSwirl, onSwirlClick }) {
  const handleScrollDown = () => {
    const nextSection = document.getElementById("main-content");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="landing-section">
      <div className="landing-content">
        <h1 className="font-heading landing-title">Hi, I’m Faiza Khan!</h1>
        <p className="font-body landing-subtitle">
          Statistics, Computer Science & Economics @ UofT
        </p>
      </div>

      {showSwirl && (
        <button
          onClick={handleScrollDown}
          className="landing-swirl-button"
          aria-label="Scroll down"
        >
          <img
            src={swirlIcon}
            alt=""
            className="landing-swirl"
            draggable={false}
          />
        </button>
      )}
    </section>
  );
}