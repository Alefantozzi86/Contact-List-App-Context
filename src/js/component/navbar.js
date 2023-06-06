import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 m-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Contactos</span>
			</Link>
			<div className="ml-auto">
				<Link to="/addcontacto">
					<button className="btn btn-primary">Add New Contact</button>
				</Link>
			</div>
		</nav>
	);
};
