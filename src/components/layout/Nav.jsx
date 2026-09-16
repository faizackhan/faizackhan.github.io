import { NavLink } from "react-router-dom";

const LINKS = [
  { to: "/work", label: "work" },
  { to: "/about", label: "about" },
  { to: "/skills", label: "skills" },
  { to: "/experience", label: "experience" },
  { to: "/fun", label: "fun" }
];

export default function Nav({ theme, setTheme }) {
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header className="site-nav">
      <NavLink to="/" className="site-nav-brand">
        <span className="site-nav-logo">
          <img src="./src/assets/fklogo.png" alt="Logo" />
        </span>
      </NavLink>

      <nav className="site-nav-links">
        {LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => `site-nav-item ${isActive ? "active" : ""}`}
          >
            {link.label}
          </NavLink>
        ))}
        <button className="site-nav-theme" onClick={toggleTheme}>
          light | dark
        </button>
      </nav>
    </header>
  );
}