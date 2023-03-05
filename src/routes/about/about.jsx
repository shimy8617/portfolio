import React from "react";

import {
  FaCss3,
  FaDatabase,
  FaGithub,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";

import firebase from "../../assets/logo-firebase.svg";

import "./about.css";

export const About = () => {
  return (
    <section id="about">
      <div className="container containerAbout d-flex flex-column justify-content-center align-items-center px-3 py-5 mx-auto">
        <div className="containerAboutBox flex-grow pr-5 text-center">
          {/*<img src={profile} className="profileImg rounded mx-auto d-block" alt="profile" />*/}
          <h2 className="display-1 fw-bolder">About Me</h2>
          <p>
            My name is Cristina. I'm a web designer and React Developer based in
            Buenos Aires, Argentina. <br />
            I'm very passionate about technology and I would love to connect
            with people with same interest.
          </p>
          <div className="skills mt-4">
            <h3 className="p-2 text-uppercase">Skills:</h3>
            <div className="row">
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <FaHtml5 className="icon" />
                <label>HTML5</label>
              </div>
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <FaCss3 className="icon" />
                <label>CSS</label>
              </div>
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <FaJsSquare className="icon" />
                <label>Javascript</label>
              </div>
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <FaReact className="icon" />
                <label>React</label>
              </div>
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <FaNodeJs className="icon" />
                <label>NodeJs</label>
              </div>
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <FaGithub className="icon" />
                <label>GitHub</label>
              </div>
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <img className="icon firebaseLogo" src={firebase} alt="" />
                <label>Firebase</label>
              </div>
              <div className="col d-flex flex-column justify-content-center align-items-center">
                <FaDatabase className="icon" />
                <label>SQL</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
