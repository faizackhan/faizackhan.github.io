import { useEffect, useRef, useState } from "react";

// Everything that gets the big rectangle expand
const HOVER_SELECTOR =
  ".work-card, .project-card, .experience-card, .fun-item, " +
  ".contact-item, .skills-tab, .projects-folder-tab, .week-btn, " +
  ".topic-card, .gallery-card, " +
  ".about-carousel-card, .about-label-pill, .timeline2-content";

// Skill icons get a separate, smaller "grab" variant instead
const DRAG_SELECTOR = ".skill-floating-item";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isSkillHover, setIsSkillHover] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    setEnabled(hasFinePointer);
    if (!hasFinePointer) return;

    function onMove(e) {
      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    }

    function onOver(e) {
      if (e.target.closest(DRAG_SELECTOR)) {
        setIsSkillHover(true);
      } else if (e.target.closest(HOVER_SELECTOR)) {
        setIsHovering(true);
      }
    }
    function onOut(e) {
      if (e.target.closest(DRAG_SELECTOR)) setIsSkillHover(false);
      if (e.target.closest(HOVER_SELECTOR)) setIsHovering(false);
    }

    // Track drag state directly, since pointerdown always fires even
    // when the row's own handler calls preventDefault().
    function onDown(e) {
      if (e.target.closest(DRAG_SELECTOR)) setIsDragging(true);
    }
    function onUp() {
      setIsDragging(false);
    }

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerout", onOut);
    document.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
      document.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, []);

  if (!enabled) return null;

  let variantClass = "";
  if (isDragging || isSkillHover) variantClass = "custom-cursor-skill";
  else if (isHovering) variantClass = "custom-cursor-hover";

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${variantClass}`}
      aria-hidden="true"
    />
  );
}