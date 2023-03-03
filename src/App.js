import React from "react";
import { Routes, Route } from "react-router-dom";

import { Navigation } from "./routes/navigation/navigation";
import { Home } from "./routes/home/home";
import { About } from "./routes/about/about";
import { Contact } from "./routes/contact/contact";
import { Projects } from "./routes/projects/projects";

function App() {
  return (
    <main>
      <Navigation />
      <Home />
      <About />
      <Contact />
      <Projects />
    </main>
  );
}

export default App;
