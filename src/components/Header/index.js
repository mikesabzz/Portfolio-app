import React from "react";
import "./Header.css";
import Navbar from "../Navbar"


function Header() {
    return (
      <div className="header">
        <div className="title typewriter">
          <h1>Hi, I'm Michael Sabzevari!</h1>
          <h2>Software Engineer in NYC</h2>
          <Navbar />
        </div>
      </div>
    );
  }
  
  export default Header;