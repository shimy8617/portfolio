import { Navigation } from "./routes/navigation";

import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <div className="presentation">
        <div className="presentationTitle">
          <h1>
            Cristina <span>Shim</span>
          </h1>
          <p>React Developer</p>
          <button type="button">Get in touch</button>
        </div>
      </div>
    </>
  );
}

export default App;
