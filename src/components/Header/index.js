import React from "react";
import SelfPt from "../images/selfpt.png";

function Header() {
  return (
    <div className="header text-center py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img
              src={SelfPt}
              className="img-fluid rounded self-portrait border"
              alt="Self Portrait"
            />
          </div>
          <div className="col-lg-6">
            <div className="title">
              <h1 className="display-4 mb-3">Hi, I'm Michael Sabzevari!</h1>
              <h2 className="lead">Software Engineer in NYC</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
