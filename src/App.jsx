import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Work from "./components/sections/Work";
import WorkGallery from "./components/sections/WorkGallery";
import Experience from "./components/sections/Experiences";
import Fun from "./components/sections/Fun";
import CSCA20Notes from "./components/sections/CSCA20Notes";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <Routes>
      <Route element={<Layout theme={theme} setTheme={setTheme} />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:topicId" element={<WorkGallery />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/fun" element={<Fun />} />
        <Route path="/notes/csca20" element={<CSCA20Notes />} />
      </Route>
    </Routes>
  );
}