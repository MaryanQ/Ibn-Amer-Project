// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import background from "../Images/Background.jpg";
import "../Programs/styles.css";
import logo from "../Images/logo.png";

const NavbarPages = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <nav>
        <img className="kurser-img" src={background} alt="background" />

        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>

        <div
          className={sidebar ? "nav-links active" : "nav-links"}
          id="navLinks"
        >
          <ul onClick={showSidebar}>
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
            <li>
              <Link to="/">HJEM</Link>
            </li>
            <li>
              <Link to="/programs/about-us">OM OS</Link>
            </li>
            <li>
              <Link to="#">KURSER</Link>
              <ul className="dropdown">
                <li>
                  <Link to="/programs/Udenadslaering">Udenadslæring</Link>
                </li>
                <li>
                  <Link to="/programs/tajweed">Tajweed</Link>
                </li>
                <li>
                  <Link to="/programs/Ijazah">Ijazah</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/programs/teachers">UNDERVISER</Link>
            </li>
            <li>
              <Link to="/programs/elever">ELEVER</Link>
            </li>
            <li>
              <Link to="/programs/contactUs">KONTAKT OS</Link>
            </li>
            <li>
              <Link to="/login">LOGIN</Link>
            </li>
          </ul>
        </div>
      </nav>
    </IconContext.Provider>
  );
};

export default NavbarPages;
