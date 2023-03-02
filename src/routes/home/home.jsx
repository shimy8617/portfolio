import { Outlet } from "react-router-dom";

import "./home.css";

export const Home = () => {
  return (
    <>
      <Outlet />
      <div className="container">
        <div className="presentation">
          <div className="completeName">
            <h1 className="fadeOut">Cristina</h1>
            <div className="translateToLeft">
              <span className="surname">Shim</span>
              <span className="fadeIn">y</span>
            </div>
          </div>
          <p className="profesion">React Developer</p>
          <button className="btn btn-outline-secondary btn-lg" type="button">
            <a href="/contact">Get in touch</a>
          </button>
        </div>
      </div>
    </>
  );
};
