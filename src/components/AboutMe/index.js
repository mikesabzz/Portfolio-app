import React from "react";

function AboutMe() {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <div className="about-me-text">
            <h2>About Me</h2>
            <p className="lead">
              Software engineer with a background in front-end technology.
              Passionate about media and programming, I solve problems using
              languages such as JavaScript, React, and other front-end
              modalities. Constantly building my programming skills through
              work and personal projects, I thrive when developing new software
              and working on teams where I am pushed as a developer.
            </p>
          </div>

          <div className="about-me-skills">
            <h2>Skills</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="card bg-secondary text-white mb-3">
                  <div className="card-header">Front-End Skills</div>
                  <ul className="list-group list-group-flush bg-light text-dark">
                    <li className="list-group-item">HTML</li>
                    <li className="list-group-item">CSS</li>
                    <li className="list-group-item">JavaScript</li>
                    <li className="list-group-item">Bootstrap</li>
                    <li className="list-group-item">Tailwind</li>
                    <li className="list-group-item">React</li>
                    <li className="list-group-item">Angular</li>
                    <li className="list-group-item">TypeScript</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-secondary text-white mb-3">
                  <div className="card-header">Back-End Skills</div>
                  <ul className="list-group list-group-flush bg-light text-dark">
                    <li className="list-group-item">ExpressJs</li>
                    <li className="list-group-item">NodeJs</li>
                    <li className="list-group-item">Java</li>
                    <li className="list-group-item">SpringBoot</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-secondary text-white mb-3">
                  <div className="card-header">DataBase</div>
                  <ul className="list-group list-group-flush bg-light text-dark">
                    <li className="list-group-item">PSQL</li>
                    <li className="list-group-item">MySQL</li>
                    <li className="list-group-item">MongoDB</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
