import React from "react";
import { Fragment } from "react";

import "./projects.css";
import woocommerce from "../../assets/woocommerce.png";
import calc from "../../assets/react-calc.png";

export const Projects = () => {

  return (
    <Fragment>
      <div className="container-fluid text-center">
        <h2 className="display-3 fw-bolder">My Projects</h2>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Launch demo modal
        </button>
    
  
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>



        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card h-100">
              <a href="https://aypoo.com.ar">
                <img src={woocommerce} className="card-img-top" alt="aypoo" />
              </a>
              <div className="card-body">
                <h4 className="card-title display-6">Ecommerce</h4>
                <p className="card-text lead">
                  Wordpress Website for an Ecommerce
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <a href="https://react-calc-6b4d1.web.app/">
                <img src={calc} className="card-img-top" alt="react cal" />
              </a>
              <div className="card-body">
                <h4 className="card-title display-6">Calc App</h4>
                <p className="card-text lead">App made with React</p>
              </div>
            </div>
          </div>
          {/* <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Monsters Rolotex</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Rick And Morty</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
  </div> */}
        </div>
      </div>
    </Fragment>
  );
};
