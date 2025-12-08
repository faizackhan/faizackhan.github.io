import { useState, useEffect } from "react";
import FolderButton from "./components/FolderButton";
import ThemeToggle from "./components/ThemeToggle";
import CatCorner from "./components/CatCorner";

export default function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.classList.remove("theme-dark", "theme-light");
    document.body.classList.add(theme === "light" ? "theme-light" : "theme-dark");
  }, [theme]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">

      {/* DARK MODE BASE */}
      <div className="content--canvas absolute inset-0 z-0 pointer-events-none" />

      {/* LIGHT MODE BASE */}
      <div className="light-overlay absolute inset-0 z-0 pointer-events-none" />

      {/* DARK MODE OVERLAY */}
      <div className="dark-overlay absolute inset-0 z-5 pointer-events-none" />

      {/* UI CONTROLS */}
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <CatCorner />

      {/* MAIN UI */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <FolderButton theme={theme} />
      </div>

      {/* COPYRIGHT */}
      <div className="fixed bottom-3 right-4 z-10 text-sm opacity-70 select-none">
        © 2025 Faiza Khan
      </div>
    </div>
  );
}