import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import "./navigation.css";

export const Navigation = () => {
  const mouseEnterHandle = (event) => {
    if (event.target.closest("a")) {
      event.target
        .closest("a")
        .querySelectorAll("span")
        .forEach((el) => {
          el.style.width = el.scrollWidth + "px";
        });
    }
  };

  const mouseOutHandle = (event) => {
    if (event.target.closest("a")) {
      event.target
        .closest("a")
        .querySelectorAll("span")
        .forEach((el) => {
          el.style.width = 0;
        });
    }
  };

  document.addEventListener("mouseover", (event) => mouseEnterHandle(event));
  document.addEventListener("mouseout", (event) => mouseOutHandle(event));

  document.removeEventListener("mouseover", (event) => mouseEnterHandle(event));
  document.removeEventListener("mouseout", (event) => mouseOutHandle(event));

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Shimy's Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/about">
                  About me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};
