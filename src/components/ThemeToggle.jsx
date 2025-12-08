import { useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="fixed top-0 right-0 p-4 z-50 pointer-events-auto"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <HiSun className="w-7 h-7 text-white" />
      ) : (
        <HiMoon className="w-7 h-7 text-white" />
      )}
    </button>
  );
}
