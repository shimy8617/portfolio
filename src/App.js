import React from "react";
import { Routes, Route } from "react-router-dom";

import { Navigation } from "./routes/navigation/navigation";
import { Home } from "./routes/home/home";
import { About } from "./routes/about/about";
import { Contact } from "./routes/contact/contact";
import { Projects } from "./routes/projects/projects";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default App;
