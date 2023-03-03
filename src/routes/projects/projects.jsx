import React from "react";

import "./projects.css";
import woocommerce from "../../assets/woocommerce.png";
import calc from "../../assets/react-calc.png";
import fetchApiIMDB from "../../assets/fetchAPI.png";

export const Projects = () => {
  return (
    <div className="container projects d-flex flex-column justify-content-center align-items-center px-5 py-5 mx-auto">
      <div className="container-fluid flex-grow pr-5 text-center">
        <h2 className="display-1 fw-bolder">My Projects</h2>

        {/*   ECOMMERCE WITH WORDPRESS  */}
        <button
          type="button"
          className="btn btn-projects border border-3"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Ecommerce
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Wordpress Website for an Ecommerce
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <img src={woocommerce} className="card-img-top" alt="aypoo" />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  <a className="linkProject" href="https://aypoo.com.ar">
                    Open
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*   REACT CALCULATOR PROJECT  */}
        <button
          type="button"
          className="btn btn-projects border border-3"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal1"
        >
          Calc App
        </button>

        <div
          className="modal fade"
          id="exampleModal1"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel1">
                  Calculator App made with React
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <img src={calc} className="card-img-top" alt="calc" />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-danger">
                  <a
                    className="linkProject"
                    href="https://react-calc-6b4d1.web.app/"
                  >
                    Open
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*   FETCH API PROJECT PLAIN HTML  */}
        <button
          type="button"
          className="btn btn-projects border border-3"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal2"
        >
          Fetch API IMDB
        </button>

        <div
          className="modal fade"
          id="exampleModal2"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel1">
                  Simple Fetch API with HTML CSS and JS
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={fetchApiIMDB}
                  className="card-img-top"
                  alt="fetchapi"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-danger">
                  <a
                    className="linkProject"
                    href="https://fetch-api-e8f71.web.app/"
                  >
                    Open
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
