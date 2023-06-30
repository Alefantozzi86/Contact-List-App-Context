import React from "react";
import { Link } from "react-router-dom";
import { AddContacto } from "../views/addcontacto";

export const Navbar = () => {
  return (
    <nav className="navbar mb-3 m-3">
      <div className="ml-auto">
        <button
          type="button"
		  id="add"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop"
        >
         Add New Contact
        </button>

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Add New Contact
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <AddContacto />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
