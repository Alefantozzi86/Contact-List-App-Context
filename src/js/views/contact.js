import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Contact = () => (
  <div className="text-center mt-5 border border-black p-3">
    <div className="card mb-3" style={{ width: 60 + "rem" }}>
      <div className="row g-0">
        <div className="col-md-4" >
          <img className=""
            src="https://img.freepik.com/foto-gratis/hombre-pulgar-arriba_1368-3701.jpg?size=626&ext=jpg&ga=GA1.1.52019007.1684833574&semt=ais"
            style={{ width: 18 + "rem" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <button type="button" class="btn btn-primary">
             Edit
            </button>
            <button type="button" class="btn btn-secondary m-2">
              Delete
            </button>
            <h5 className="card-title text-start">Nombre</h5>
            <p className="text-start">direccion</p>
            <p className="text-start">Movil</p>
            <p className="text-start">email</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
