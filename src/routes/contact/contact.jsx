import React from "react";

import { FaLinkedinIn, FaInstagram, FaAt } from "react-icons/fa"; // <-- import styles to be used

import "./contact.css";

export const Contact = () => {
  return (
    <div className="container">
      <div className="containerContact">
        <h2>Contact Me:</h2>
        <div className="row row-cols-1 socialMedia">
          <div className="col p-2">
            <a
              href="https://www.linkedin.com/in/cristina-elisabet-shim-b5809ba8/"
              role="button"
              title="Linkedin"
            >
              <FaLinkedinIn className="icon" />
            </a>
          </div>
          <div className="col p-2">
            <a
              href="https://www.instagram.com/shimyce"
              role="button"
              title="Instagram"
            >
              <FaInstagram className="icon" />
            </a>
          </div>
          <div className="col p-2">
            <a href="/" role="button" title="Email">
              <FaAt className="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
