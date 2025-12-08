import { HiSun, HiMoon } from "react-icons/hi";

export default function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-4 right-4 z-20"
    >
      {theme === "dark" ? (
        <HiSun className="w-7 h-7 text-white" />
      ) : (
        <HiMoon className="w-7 h-7 text-black" />
      )}
    </button>
  );
}
