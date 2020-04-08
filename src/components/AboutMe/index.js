import React from "react";
import './AboutMe.css';

function AboutMe() {
    return (
      <div id="about-me">
        <img id="self-portrait" src="https://imgur.com/Vphx7sS.png" className="self-portrait" alt=""></img>
        <div className="about-me-images">
        <h3>About Me</h3>
        <p>Software engineer with a background in production and technology. Passionate about media and programming, I solve problems using languages such as JavaScript, React, and other front-end modalities. Constantly building my programming skills through work and personal projects, I thrive when developing new software’s and working on teams where I am pushed as a developer.</p>
          <h3>Skills</h3>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" alt=""></img>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt=""></img>
          <img src="https://www.brandlabs.us/wp-content/uploads/2016/10/logo-expert-javascript.png" alt=""></img>
          <img src="https://fuzati.com/wp-content/uploads/2016/12/Bootstrap-Logo.png" alt="" />
          <img src="https://www.fullstacklabs.co/img/pages/DeveloperProfile/technologyLogos/tech_react.png" alt="" />
          <img src="https://www.programmingscripts.com/wp-content/uploads/2016/01/jquery-icon.png" alt="" />
          <img src="https://www.orthanc-server.com/img/Resources/PostgreSQL.png" alt="" />
          <img src="https://images.tutorialedge.net/images/node.png" alt="" />
          <img src="https://www.resourcifi.com/wp-content/themes/resourcifi-child/img/express-min.png" alt="" />
          <img src="https://fuzati.com/wp-content/uploads/2016/12/Ruby-Logo.png" alt="" />
          <img src="https://www.arkasoftwares.com/images/android/rubyonrailsLogo.png" alt="" />
        </div>
      </div>

    );
  }
  
  export default AboutMe;