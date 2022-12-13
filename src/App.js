import { Routes, Route } from 'react-router-dom';

import { Navigation } from "./routes/navigation/navigation";
import { Home } from "./routes/home/home";
import { About } from "./routes/about/about";
import { Contact } from "./routes/contact/contact";
import { Projects } from "./routes/projects/projects";


function App() {

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='projects' element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default App;
