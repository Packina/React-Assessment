import React from "react";
import {Link, NavLink} from "react-router-dom"
// import Owner from "./Owner" 
// import Home from "./Home";
import "./Navbar.css"

export const Navbar = () => {
  return (
  <nav>
    <Link to="/home" className="title">JSD6</Link>
    <ul>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="owner">Owner</NavLink></li>
    </ul>
  </nav>
  );
};

export default Navbar;