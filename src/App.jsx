import { useState } from "react";
import FolderButton from "./components/FolderButton";
import ThemeToggle from "./components/ThemeToggle";
import CatCorner from "./components/CatCorner";

export default function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={`relative w-screen h-screen overflow-hidden ${ 
      theme === "light" ? "theme-light" : "theme-dark"
      }`}
    >

      {/* DARK MODE BACKGROUND (JS / CSS) */}
      {theme === "dark" && (
        <>
          <div className="content--canvas absolute inset-0 z-0 pointer-events-none" />
          <div className="absolute inset-0 bg-linear-to-br from-[#17143a]/60 to-[#4d1a4e]/60 z-5 pointer-events-none" />
        </>
      )}

      {/* LIGHT MODE BACKGROUND (HTML-style animated gradient) */}
      {theme === "light" && (
        <div className="background--custom pointer-events-none z-0" />
      )}

      {/* UI CONTROLS */}
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <CatCorner />

      {/* MAIN UI */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <FolderButton />
      </div>

    </div>
  );
}
