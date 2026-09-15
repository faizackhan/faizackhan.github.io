import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";

export default function Layout({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollShow, setScrollShow] = useState(false);
  const lastY = useRef(0);
  const location = useLocation();
  const navWrapperRef = useRef(null);

  // Reveal on scroll-up, hide on scroll-down
  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      if (y < lastY.current - 4) {
        setScrollShow(true);
      } else if (y > lastY.current + 4) {
        setScrollShow(false);
      }
      lastY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the nav whenever you navigate to a new page
  useEffect(() => {
    setMenuOpen(false);
    setScrollShow(false);
    lastY.current = 0;
  }, [location.pathname]);

  // Close the nav on click/tap outside it
  useEffect(() => {
    if (!menuOpen) return;

    function handleOutside(e) {
      if (navWrapperRef.current && !navWrapperRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, [menuOpen]);

  const navVisible = menuOpen || scrollShow;

  return (
    <div className={theme === "dark" ? "theme-dark" : "theme-light"}>
      <CustomCursor />

      <div ref={navWrapperRef}>
        <button
          className="hamburger-btn"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>

        <div className={`top-menu-fixed ${navVisible ? "menu-visible" : "menu-hidden"}`}>
          <Nav theme={theme} setTheme={setTheme} />
        </div>
      </div>

      <section className="main-content-section">
        <div className="main-panel-content">
          <Outlet />
          <Footer theme={theme} setTheme={setTheme} />
        </div>
      </section>
    </div>
  );
}