import React from "react";
import { Fragment } from "react";

import "./projects.css";
import woocommerce from "../../assets/woocommerce.png";
import calc from "../../assets/react-calc.png";

export const Projects = () => {
  const exampleModal = document.getElementById("exampleModal");
  exampleModal.addEventListener("show.bs.modal", (event) => {
    // Button that triggered the modal
    const button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute("data-bs-whatever");
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
    const modalTitle = exampleModal.querySelector(".modal-title");
    const modalBodyInput = exampleModal.querySelector(".modal-body input");

    modalTitle.textContent = `New message to ${recipient}`;
    modalBodyInput.value = recipient;
  });

  return (
    <Fragment>
      <div className="container-fluid text-center">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
        >
          Open modal for @mdo
        </button>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@fat"
        >
          Open modal for @fat
        </button>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@getbootstrap"
        >
          Open modal for @getbootstrap
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  New message
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label for="recipient-name" className="col-form-label">
                      Recipient:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="message-text" className="col-form-label">
                      Message:
                    </label>
                    <textarea
                      className="form-control"
                      id="message-text"
                    ></textarea>
                  </div>
                </form>
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
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>

        <h2 className="display-3 fw-bolder">My Projects</h2>
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
