import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"
function Navbar() {
  return (
    <div>
      <div className="up_container">
        <div className="nav_content">
          <div className="cont_left">
            <a to="/">Khana Khajana</a>
          </div>
          <div className="cont_right">
            <Link to="/">Home</Link>
            
            <Link to="/Menu">Menu</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
          </div>
        </div>
        <div className="pic_content">
          <span className="fresh">Fresh</span><span>Food</span>
          <p>Healthy life</p>
          <a to="/">Order Now</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
