import { useEffect, useRef, useState } from "react";

const HOVER_SELECTOR =
  ".work-card, .project-card, .experience-card, .fun-item, " +
  ".contact-item, .skills-tab, .projects-folder-tab, .week-btn";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
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
      if (e.target.closest(HOVER_SELECTOR)) setIsHovering(true);
    }
    function onOut(e) {
      if (e.target.closest(HOVER_SELECTOR)) setIsHovering(false);
    }

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isHovering ? "custom-cursor-hover" : ""}`}
      aria-hidden="true"
    />
  );
}