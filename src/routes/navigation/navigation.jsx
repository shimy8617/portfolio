import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import "./navigation.css";

export const Navigation = () => {
  return (
    <Fragment>  
      <div>
        <nav className="navigation">
          <a href="./assets/logo">Logo</a>
          <ul className="navLinks">
            <li className="navItems">
              <a href="/">Home</a>
            </li>
            <li className="navItems">
              <a href="/about">About me</a>
            </li>
            <li className="navItems">
              <a href="/projects">Projects</a>
            </li>
            <li className="navItems">
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>    
      <Outlet />
    </Fragment>
  );
};
