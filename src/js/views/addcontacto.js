import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/demo.css";

export const AddContacto = () => {
  const navigate= useNavigate();
   const [data, setData] = useState({
    "full_name": "",
    "email": "",
    "agenda_slug": "Alefantozzi",
    "address":"",
    "phone":""
  });

  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value});

  }
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const config = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch('https://assets.breatheco.de/apis/fake/contact/', config)
      .then((resp) => resp.json())
      .then((response) => navigate("/"))
      .then (response =>console.log("contacto agregado"))
      .then (response=> alert("El contacto se ha agregado"))
      .catch((error) => console.error("error:", error))
  };
  return (
    <div className="container float-md-start">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="full-name"
            placeholder="Enter Full Name"
            name="full_name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input
            type="phone"
            className="form-control"
            id="phone"
            placeholder="Enter Phone"
            name="phone"
            onChange={handleChange}
          />
          </div>
          <div className="form-group">
          <label for="address" className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter Address"
            name="address"
            onChange={handleChange}
          />
        </div>
        <div className= "col-10">
        <button type="submit" className="container float-md-start btn btn-primary m-4">
       Save
        </button>
        </div>
      </form>
    </div>
  );
};
