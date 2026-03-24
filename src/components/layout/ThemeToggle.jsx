import { HiSun, HiMoon } from "react-icons/hi";

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-5 right-5 z-[9999] rounded-full border border-[var(--border)] bg-[var(--frame-bg)] p-3 shadow-md transition-all"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <HiSun className="h-7 w-7 text-[var(--text)]" />
      ) : (
        <HiMoon className="h-7 w-7 text-[var(--text)]" />
      )}
    </button>
  );
}
