import { Outlet } from "react-router-dom";

import "./home.css";

export const Home = () => {
  return (
    <>
      <Outlet />
      <div className="container homeContainer  d-flex flex-column justify-content-center align-items-center px-5 py-5 mx-auto">
        <div className="presentation  flex-grow pr-5 text-center">
          <div className="completeName">
            <h1 className="fadeOut">Cristina</h1>
            <div className="translateToLeft">
              <span className="surname">Shim</span>
              <span className="fadeIn">y</span>
            </div>
          </div>
          <p className="profesion fw-bold">React Developer</p>
          <a
            className="btn btn-outline-dark btn-lg getInTouch"
            type="button"
            href="/contact"
          >
            Get in touch
          </a>
        </div>
      </div>
    </>
  );
};
