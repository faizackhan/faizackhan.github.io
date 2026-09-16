import { useEffect, useRef, useState, useCallback } from "react";

const ABOUT_ITEMS = [
  {
    number: "0",
    label: "who i am",
    blurb:
      "Third-year Statistics Specialist (Data Science and Machine Learning) student at the University of Toronto, minoring in Computer Science and Economics.",
    image: "https://picsum.photos/seed/about-0/500/620",
  },
  {
    number: "1",
    label: "what i do",
    blurb:
      "I sit at the intersection of data, software, and design — turning messy datasets into useful models, and models into interfaces people actually enjoy using.",
    image: "https://picsum.photos/seed/about-1/500/620",
  },
  {
    number: "2",
    label: "my favorite things",
    blurb:
      "Good coffee, well-designed apps, a well-labeled chart, and the specific joy of a bug finally making sense. (Placeholder — tell me your actual favorites!)",
    image: "https://picsum.photos/seed/about-2/500/620",
  },
  {
    number: "3",
    label: "in my free time",
    blurb:
      "Outside of school I'm currently on a co-op placement, teaching robotics and coding curriculum to kids — which somehow makes me a better communicator about technical ideas too.",
    image: "https://picsum.photos/seed/about-3/500/620",
  },
  {
    number: "4",
    label: "my motivations",
    blurb:
      "I'm especially drawn to product analytics, UX research, and data visualization — roles where being curious about people and comfortable with numbers both matter.",
    image: "https://picsum.photos/seed/about-4/500/620",
  },
  {
    number: "5",
    label: "my future goals",
    blurb:
      "Placeholder — where do you see yourself in a few years? A specific role, company type, or skill you're building toward?",
    image: "https://picsum.photos/seed/about-5/500/620",
  },
  {
    number: "6",
    label: "things i'm learning",
    blurb:
      "Placeholder — a tool, language, or concept you're currently picking up.",
    image: "https://picsum.photos/seed/about-6/500/620",
  },
  {
    number: "7",
    label: "values i hold",
    blurb:
      "Placeholder — what matters to you in how you work or collaborate with others?",
    image: "https://picsum.photos/seed/about-7/500/620",
  },
  {
    number: "8",
    label: "a fun fact",
    blurb: "Placeholder — something a little unexpected about you.",
    image: "https://picsum.photos/seed/about-8/500/620",
  },
];

export default function About() {
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  const updateScales = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const trackRect = track.getBoundingClientRect();
    const centerX = trackRect.left + trackRect.width / 2;

    let closestIndex = 0;
    let closestDist = Infinity;

    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const dist = Math.abs(cardCenter - centerX);
      const maxDist = trackRect.width / 2;
      const t = Math.min(1, dist / maxDist);
      const scale = 1 - t * 0.3;
      const opacity = 1 - t * 0.6;
      card.style.transform = `scale(${scale})`;
      card.style.opacity = opacity;

      if (dist < closestDist) {
        closestDist = dist;
        closestIndex = i;
      }
    });

    setActiveIndex((prev) => (prev !== closestIndex ? closestIndex : prev));
  }, []);

  useEffect(() => {
    updateScales();
    const track = trackRef.current;
    if (!track) return;

    let raf = null;
    function onScroll() {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateScales);
    }
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [updateScales]);

  function handlePointerDown(e) {
    const track = trackRef.current;
    isDragging.current = true;
    dragStart.current = { x: e.clientX, scrollLeft: track.scrollLeft };
    track.classList.add("is-dragging");

    function onMove(ev) {
      if (!isDragging.current) return;
      const dx = ev.clientX - dragStart.current.x;
      track.scrollLeft = dragStart.current.scrollLeft - dx;
    }
    function onUp() {
      isDragging.current = false;
      track.classList.remove("is-dragging");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    }
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
  }

  function scrollToIndex(i) {
    const card = cardRefs.current[i];
    if (card) card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }

  return (
    <div className="about-wrapper">
      <h2 className="about-heading">a bit about me</h2>

      <div
        className="about-carousel-track"
        ref={trackRef}
        onPointerDown={handlePointerDown}
      >
        <div className="about-carousel-spacer" />
        {ABOUT_ITEMS.map((item, i) => (
          <div
            className="about-carousel-card"
            key={item.label}
            ref={(el) => (cardRefs.current[i] = el)}
          >
            <img className="about-carousel-image" src={item.image} alt={item.label} draggable={false} />
            <span className="about-carousel-badge">{item.number}</span>
          </div>
        ))}
        <div className="about-carousel-spacer" />
      </div>

      <div className="about-active-caption">
        <p className="about-active-label">
          {ABOUT_ITEMS[activeIndex].number}. {ABOUT_ITEMS[activeIndex].label}
        </p>
        <p className="about-active-blurb">{ABOUT_ITEMS[activeIndex].blurb}</p>
      </div>
    </div>
  );
}