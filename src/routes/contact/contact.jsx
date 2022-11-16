import React from "react";

import { FaLinkedinIn, FaInstagram, FaAt } from 'react-icons/fa'; // <-- import styles to be used

import './contact.css';

export const Contact = () => {
  return (
    <div className="containerContact">
        <h1 className="title"><span>Contact</span><span>me:</span></h1>
            <div className="row row-cols-1 socialMedia">
                <div className="col">
                <a className="btn btn-primary" href="https://www.linkedin.com/in/cristina-elisabet-shim-b5809ba8/" role="button"><FaLinkedinIn className="icon" /></a>
                </div>
                <div className="col">
                <a className="btn btn-primary" href="https://www.linkedin.com/in/cristina-elisabet-shim-b5809ba8/" role="button"><FaInstagram className="icon" /></a>
                </div>
                <div className="col">
                <a className="btn btn-primary" href="https://www.linkedin.com/in/cristina-elisabet-shim-b5809ba8/" role="button"><FaAt className="icon" /></a>
                </div>
        </div>
    </div>
  );
};
