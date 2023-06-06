import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const AddContacto = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label for="fullName" className="form-label">
            Full Name
          </label>
          <input type="fullname" className="form-control" />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInput" className="form-label">
            Phone
          </label>
          <input type="phone" className="form-control" />
        </div>
		<label for="fullName" className="form-label">
          Address
          </label>
          <input type="fullname" className="form-control" />
          
        <button type="submit" className="container-fluid btn btn-primary m-4">
       Save
        </button>
      </form>

      <Link to="/">
        <button className="btn btn-primary">Back to contact</button>
      </Link>
    </div>
  );
};
