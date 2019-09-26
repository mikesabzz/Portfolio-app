import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return (
        <div>
          <div className="navbar">
            <a href="#about-me" target="" className="nav-link">About Me</a>
            <a href="#project-container" target="" className="nav-link">Projects</a>
            <a href="#footer" target="" className="nav-link">Contact</a>
          </div>
        </div>
      );
    }
  }
  
  export default Navbar;
  