import FolderButton from "./components/FolderButton";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <div className="relative w-screen h-screen overflow-hidden text-white">
      <div className="content--canvas absolute inset-0 z-0 pointer-events-none"></div>
      <div className="absolute inset-0 bg-linear-to-br from-[#17143a]/60 to-[#4d1a4e]/60 z-5 pointer-events-none"></div>
      <ThemeToggle />

      <div className="relative z-10 flex items-center justify-center h-full">
        <FolderButton />
      </div>

    </div>
  );
}
