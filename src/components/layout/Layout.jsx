import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";

export default function Layout({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navWrapperRef = useRef(null);

  // Close the nav whenever you navigate to a new page
  useEffect(() => {
    setMenuOpen(false);
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

  return (
    <div className={theme === "dark" ? "theme-dark" : "theme-light"}>
      <CustomCursor />

      <div ref={navWrapperRef}>
        {/* Always-visible bar, pinned to the top no matter what */}
        <div className="top-bar-fixed">
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
        </div>

        {/* Menu bar — drops down under the fixed bar when toggled */}
        <div className={`top-menu-fixed ${menuOpen ? "menu-visible" : "menu-hidden"}`}>
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