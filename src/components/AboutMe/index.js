import React from "react";
import './AboutMe.css';
import Unix from "../images/unix.jpg";
import Agile from "../images/Agile.png";

function AboutMe() {
    return (
      <div id="about-me">
        <img id="self-portrait" src="https://imgur.com/Vphx7sS.png" className="self-portrait" alt=""></img>
        <div className="about-me-images">
        <h3>About Me</h3>
        <p>Software engineer with a background in production and technology. Passionate about media and programming, I solve problems using languages such as JavaScript, React, and other front-end modalities. Constantly building my programming skills through work and personal projects, I thrive when developing new software’s and working on teams where I am pushed as a developer.</p>
          <h3>Skills</h3>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png" alt="HTML5"></img>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="CSS"></img>
          <img src="https://www.brandlabs.us/wp-content/uploads/2016/10/logo-expert-javascript.png" alt="JavaScript"></img>
          <img src="https://fuzati.com/wp-content/uploads/2016/12/Bootstrap-Logo.png" alt="BootStrap" />
          <img src="https://i.pinimg.com/originals/f3/47/70/f34770503b90f26ea389f557500ff825.png" alt="React" />
          <img src="https://www.programmingscripts.com/wp-content/uploads/2016/01/jquery-icon.png" alt="jQuery" />
          <img src="https://www.orthanc-server.com/img/Resources/PostgreSQL.png" alt="PostgreSQL" />
          <img src="https://www.pngkit.com/png/full/383-3838914_mongo-db-design-mongodb-logo-mongodb.png" alt="MongoDB" />
          <img src="https://images.tutorialedge.net/images/node.png" alt="node.js" />
          <img src="https://www.resourcifi.com/wp-content/themes/resourcifi-child/img/express-min.png" alt="Express.js" />
          <img src="https://fuzati.com/wp-content/uploads/2016/12/Ruby-Logo.png" alt="Ruby" />
          <img src="https://www.arkasoftwares.com/images/android/rubyonrailsLogo.png" alt="Rails" />
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png" alt="java"></img>
          <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/104961974/original/115a26d1dd15eb9dc31b93fc1032b8ce9c1d3e3c/develop-web-services-from-spring-framework.png" alt="Spring" />
          <img src="https://severalnines.com/sites/default/files/mariadb_logo_6.png" alt="MariaDb" />
          <img src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-and-moodle-elearningworld-5.png" alt="MySQL" />
          <img src="https://miro.medium.com/max/800/1*YH-TQKYTpl65RkARD1yJMQ.png" alt="Angular" />
          <img src={Unix} alt="Unix" />
          <img src={Agile} alt="Agile" />
        </div>
      </div>

    );
  }
  
  export default AboutMe;