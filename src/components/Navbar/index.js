import React from "react";
import { Link } from "react-scroll";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <div className="navbar-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
              <Link
                  className="nav-link text-white font-weight-bold btn btn-outline-secondary"
                  to="about-me"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  About Me
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link
                  className="nav-link text-white font-weight-bold btn btn-outline-secondary"
                  to="project-container"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  className="nav-link text-white font-weight-bold btn btn-outline-secondary"
                  to="footer"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
