import React from "react";
import './AboutMe.css';

function AboutMe() {
    return (
      <div id="about-me">
          <h3>About Me</h3>
        <p>Software engineer with a background in production and technology. Passionate about media and programming, I solve problems using languages such as JavaScript, React, and other front-end modalities. Constantly building my programming skills through work and personal projects, I thrive when developing new software’s and working on teams where I am pushed as a developer.</p>
        <div className="about-me-images"><h3>Skills</h3>
          <img src="https://gamesandimpact.org/wp-content/uploads/2014/09/htmlCssJavascriptLogos.png" alt=""></img>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/540px-Postgresql_elephant.svg.png" alt="" />
          <img src="https://images.tutorialedge.net/images/node.png" alt="" />
          <img src="https://seeklogo.net/wp-content/uploads/2016/07/ruby-vector-logo.png" alt="" />
          <img src="https://www.fullstacklabs.co/img/technologyLogos/tech_rubyonrails.png" alt="" />

        </div>
      </div>

    );
  }
  
  export default AboutMe;