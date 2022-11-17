import { Outlet } from "react-router-dom";

import "./home.css";

export const Home = () => {
  return (
    <>
      <Outlet />
      <div className="presentation">
        <div className="presentationContainer">
          <div className="completeName">
            <h1 className="fadeOut">Cristina</h1>
            <span className="surname">Shim</span>
            <span className="fadeIn">y</span>
          </div>
          <p>React Developer</p>
          <button type="button">Get in touch</button>
        </div>
      </div>
    </>
  );
};
