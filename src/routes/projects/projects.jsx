import React from "react";
import { Fragment } from "react";

import "./projects.css";
import woocommerce from "../../assets/woocommerce.png";
import calc from "../../assets/react-calc.png";

export const Projects = () => {
  return (
    <Fragment>
      <div className="container-fluid text-center">
        <h2>My Projects</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card h-100">
              <a href="https://aypoo.com.ar">
                <img src={woocommerce} className="card-img-top" alt="aypoo" />
              </a>
              <div className="card-body">
                <h4 className="card-title">Ecommerce</h4>
                <p className="card-text">Wordpress Website for an Ecommerce</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <a href="https://react-calc-6b4d1.web.app/">
                <img src={calc} className="card-img-top" alt="react cal" />
              </a>
              <div className="card-body">
                <h4 className="card-title">React Calculator</h4>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
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
