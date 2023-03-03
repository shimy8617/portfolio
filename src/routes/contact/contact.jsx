import React from "react";

import { FaLinkedinIn, FaInstagram, FaAt, FaGithub } from "react-icons/fa"; // <-- import styles to be used

import "./contact.css";

export const Contact = () => {
  return (
    <div className="container contContact d-flex flex-column justify-content-center align-items-center px-5 py-5 mx-auto">
      <div className="containerContact flex-grow pr-5">
        <h2 className="display-1 p-2 fw-bolder">Contact Me:</h2>
        <div className="container containerForm">
          <form>
            <div class="mb-3">
              <label for="exampleFormControlInput" class="form-label">
                Name
              </label>
              <input
                type="text"
                aria-label="Name"
                class="form-control"
                id="exampleFormControlInput"
                placeholder="John Doe"
              />
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="John@doe.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Message
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Leave me a message..."
              ></textarea>
            </div>
            <button type="submit" class="btn btn-danger">
              Submit
            </button>
          </form>

          <div className="row w-50 m-auto socialMedia">
            <div className="col p-2 d-flex justidy-content-center align-items-center">
              <FaAt className="iconEmail" />
              <span className="px-2 email">shim.cristina@gmail.com</span>
            </div>
            <div className="row">
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
                  href="https://github.com/shimy8617"
                  role="button"
                  title="GitHub"
                >
                  <FaGithub className="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
