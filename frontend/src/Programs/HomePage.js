import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Our School Website</h1>

      <ul>
        <li>
          <Link to="/programs/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/programs/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link to="/programs/hifdh">Hifdh</Link>
        </li>
        <li>
          <Link to="/programs/ijaaza">Ijaaza</Link>
        </li>
        <li>
          <Link to="/programs/tajweed">Tajweed</Link>
        </li>
        <li>
          <Link to="/programs/teachers">Teachers</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
