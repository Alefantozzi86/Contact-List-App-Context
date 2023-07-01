import React from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.css";
import { useState, useEffect } from "react";
import { Navbar } from "../component/navbar";

export const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const { theid }= useParams();
  useEffect(() => {
    fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Alefantozzi")
      .then((response) => response.json())
      .then((contacts) => {
        setContacts(contacts);
      });
  });

  const handleDelete = (theid) => {
    const config = {
      method: "DELETE",
    };
    alert("Usuario Eliminado")

    fetch(`https://assets.breatheco.de/apis/fake/contact/${theid}`, config)
    .then((res) => res.json()
    );
  };

  return(
    <>
    <Navbar/>
    <div className="container-expanded-xl-start">
  <div className="text-center mt-5 border border-0 p-3" id="contactos">
  {contacts.map((contact, index) => (
    <div key={index} className="card mb-3" id="contacto" style={{ width: 60 + "rem" }}>
      <div className="row g-0">
        <div className="col-md-4" >
          <img className=""
            src="https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"
            style={{ width: 18 + "rem" }}
          />
        </div>
        <div className="col md-8">
         
          <div className="card-body d-flex justify-space-between">
          <Link to={`/edit/${contact.id}`}>
            <button type="button" className="btn btn-primary m-2" id="boton">
             Edit
            </button>
            </Link>
            <button onClick={() => handleDelete(contact.id)} type="button" className="btn btn-secondary m-2"id="boton">
              Delete 
            </button>
            </div>
            <p className="card-title text-start fs-1 text-white">{contact.full_name}</p>
            <p className="text-xl-start  fs-5  text-white">{contact.address}</p>
            <p className="text-xl-start  fs-5  text-white">{contact.phone}</p>
            <p className="text-xl-start fs-5  text-white">{contact.email}</p>
          </div>
        </div>
      </div>
       ))}
  </div>
  </div>
  </>
  );
};
