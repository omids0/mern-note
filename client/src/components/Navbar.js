import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Link to="/" className="link">
          <h1 className="navbar-logo-h1">DIMO</h1>
          <p className="navbar-logo-sub">Note</p>
        </Link>
      </div>
      <div>
        <Link to="/addnewnote">
          <button className="navbar-add-new">Add New</button>
        </Link>
      </div>
    </div>
  );
}
