import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import "./navigation.css";

export const Navigation = () => {
  return (
    <Fragment>  
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Logo</a>
          <button className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target=".dual-collapse2" 
          aria-controls="navbarSupportedContent" 
          aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="navItems">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li className="navItems">
                <a className="nav-link" aria-current="page" href="/about">About me</a>
              </li>
              <li className="navItems">
                <a className="nav-link" aria-current="page" href="/projects">Projects</a>
              </li>
              <li className="navItems">
                <a className="nav-link" aria-current="page" href="/contact">Contact</a>
              </li>
            </ul>
            </div>
          </div>
        </nav>  
      <Outlet />
    </Fragment>
  );
};
