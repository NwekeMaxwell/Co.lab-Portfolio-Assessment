import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import menu from "../../Assets/menu.svg";
import cross from "../../Assets/cross.svg";

const NavBar = () => {
  const [active, setActive] = useState(false);

  const activeMenu = () => {
    setActive(!active);
  };
  const pageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };
  return (
    <div className="navbar">
      <h2 onClick={pageUp}>Maxwell</h2>
      <div className="navItems">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/inspo">Inspo</Link>
        </ul>
      </div>
      {/* mobile nav */}
      <div className="mobileNavMenu">
        <img onClick={() => activeMenu()} src={active ? cross : menu} alt="" />
      </div>

      <div
        className={`mobile-nav-list ${active ? "open-menu" : "closed-menu"}`}
      >
        <ul>
          <li onClick={() => activeMenu()}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={() => activeMenu()}>
            <Link to="/projects">Projects</Link>
          </li>
          <li onClick={() => activeMenu()}>
            <Link to="/inspo">Inspo</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
