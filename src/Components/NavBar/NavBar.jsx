import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div>Maxwell</div>
      <div>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/inspo">Inspo</Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
