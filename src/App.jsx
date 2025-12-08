import { useState } from "react";
import FolderButton from "./components/FolderButton";
import ThemeToggle from "./components/ThemeToggle";
import CatCorner from "./components/CatCorner";

export default function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div
      className={`relative w-screen h-screen overflow-hidden ${
        theme === "light" ? "theme-light" : "theme-dark"
      }`}
    >
      {/* DARK MODE BACKGROUND */}
      <div className="content--canvas absolute inset-0 z-0 pointer-events-none" />

      {/* LIGHT MODE BACKGROUND */}
      <div className="background--custom absolute inset-0 z-0 pointer-events-none" />

      {/* DARK MODE OVERLAY */}
      <div className="dark-overlay absolute inset-0 z-5 pointer-events-none" />

      {/* UI CONTROLS */}
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <CatCorner />

      {/* MAIN UI */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <FolderButton theme={theme} />
      </div>
    </div>
  );
}
