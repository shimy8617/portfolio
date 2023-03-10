import React from "react";

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
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
