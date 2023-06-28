import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/demo.css";

export const AddContacto = () => {
  const navigate = useNavigate()
  const {data, setData } = useState({
		full_name: "",
		email: "",
		agenda_slug: "Alefantozzi",
		address: "",
		phone: ""
	});
 
  const handleSubmit = (event)=>{
    event.preventDefault();
    const text={

      method: "POST",
			body: JSON.stringify(data),
			headers: { "Content-Type": "application/json" },
    };
      
      fetch ("https://assets.breatheco.de/apis/fake/contact/", text) 
        .then ((resp) => resp.json())
        .catch (error => console.error("error:", error))
        .then ((response) => navigate("/"))
      }
  

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        
        <div className="mb-3">
          <label for="fullName" className="form-label">
            Full Name
          </label>
          <input type="text" className="form-control" id="full_name" placeholder="Full Name" onChange={(event) => {
							setData({...data, full_name: event.target.value})
						}}/>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input type="text" className="form-control" id="email" placeholder="Enter Email" onChange={(event) => {
							setData({...data, email: event.target.value})
						}}/>
        </div>
        <div className="mb-3">
          <label for="exampleInput" className="form-label" id="phone" >
            Phone
          </label>
          <input type="phone" className="form-control"id="phone" placeholder="Enter Phone" onChange={(event) =>{
          setData ({...data, phone: event.target.value})
          }} />
        </div>
		<label for="fullName" className="form-label">
          Address
          </label>
          <input type="fullname" className="form-control" id="address" placeholder="Enter Address" onChange={(event)=>{
            setData({...data, address: event.target.value})
          }}/>
          
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
