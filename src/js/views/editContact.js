import React, {useState, useEffect} from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const EditContact=()=>{
const { theid } = useParams();
const navigate = useNavigate();
const [data, setData]= useState({
    "full_name": "",
    "email": "",
    "address":"",
    "agenda_slug": "Alefantozzi",
    "phone":""
});
  useEffect(() => {
    fetch(`https://assets.breatheco.de/apis/fake/contact/${theid}`)
      .then(res => res.json())
      .then(response => 
        setData(response)
      );
  }, [theid]);
 
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!data.full_name) {
      alert("Please enter your full name.");
      return;
    }
    if (!data.email) {
      alert("Please enter your email address.");
      return;
    }
    if (!data.address) {
      alert("Please enter your address.");
      return;
    }
    if (!data.phone) {
      alert("Please enter your phone number.");
      return;
    }
    const config = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    };
      fetch(`https://assets.breatheco.de/apis/fake/contact/${theid}`, config)
      .then((res) => res.json())
      .then(response =>{
        console.log("contacto actualizado")
        alert("El contacto se ha actualizado")
        navigate("/")}
  )};
  return (
    <div className="container form_box">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              value={data.full_name}
              className="form-control"
              id="full_name"
              placeholder="Name"
              aria-describedby="addon-wrapping"
              onChange={(event) => {
                setData({ ...data, full_name: event.target.value });
              }}
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              value={data.email}
              className="form-control"
              id="email"
              placeholder="email"
              aria-describedby="addon-wrapping"
              onChange={(event) => {
                setData({ ...data, email: event.target.value });
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label htmlFor="adress" className="form-label">
              Address
            </label>
            <input
              type="text"
              value={data.address}
              className="form-control"
              id="address"
              placeholder="Address"
              aria-describedby="addon-wrapping"
              onChange={(event) => {
                setData({ ...data, address: event.target.value });
              }}
            />
          </div>
          <div className="col-6">
            <label htmlFor="phone" className="form-label">
              Phone number
            </label>
            <input
              type="text"
              value={data.phone}
              className="form-control"
              id="phone"
              placeholder="Phone"
              aria-describedby="addon-wrapping"
              onChange={(event) => {
                setData({ ...data, phone: event.target.value });
              }}
            />
          </div>
        </div>
        <div className="row-final">
          <Link to="/">
            <button className="back_register">Back</button>
          </Link>
          <button className="btn_save" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditContact;