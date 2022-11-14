import { Navigation } from "./routes/navigation";

import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <div className="presentation">
        <div className="presentationTitle">
        <div className="completeName">
          <h1 className="fadeOut">
            Cristina
          </h1>
          <span className="surname">Shim<span className="fadeIn">y</span></span>
        </div>
          <p>React Developer</p>
          <button type="button">Get in touch</button>
        </div>
      </div>
    </>
  );
}

export default App;
