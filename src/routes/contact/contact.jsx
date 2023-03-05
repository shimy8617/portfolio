import React from "react";
import { db } from "../../index.js";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";

import { FaLinkedinIn, FaAt, FaGithub } from "react-icons/fa"; // <-- import styles to be used

import "./contact.css";

export const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const userCollectionRef = collection(db, "contactData");

  const handleSubmit = () => {
    addDoc(userCollectionRef, {
      name: name,
      email: email,
      message: message,
    })
      .then(() => {
        if (!alert("Thank You!")) document.location = "/";
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <section id="contact">
      <div className="container contContact d-flex flex-column justify-content-center align-items-center px-3 py-5 mx-auto">
        <div className="containerContact flex-grow pr-5">
          <h2 className="display-1 p-2 fw-bolder">Contact Me:</h2>
          <div className="container containerForm">
            <form className="contactForm">
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput" className="form-label">
                  Name
                </label>
                <input
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  type="text"
                  aria-label="Name"
                  className="form-control"
                  id="exampleFormControlInput"
                  placeholder="John Doe"
                />
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="John@doe.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Message
                </label>
                <textarea
                  onChange={(event) => {
                    setMessage(event.target.value);
                  }}
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Leave me a message..."
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn btn-danger"
              >
                Submit
              </button>
            </form>

            <div className="row m-auto socialMedia">
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
    </section>
  );
};
