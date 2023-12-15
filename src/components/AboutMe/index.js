import React from "react";

function AboutMe() {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-8 col-lg-6 mx-auto border p-4">
          <div className="about-me-text border-bottom mb-4 pb-4">
            <h2>About Me</h2>
            <p className="lead">
              I'm a software engineer with a diverse skill set in programming. I excel in Angular and React for front-end work, SQL and MongoDB for managing databases, and I'm adept at Express.js, Java, and Python for back-end development. I'm passionate about both media and programming and am always eager to learn, staying current with the latest trends and advancements in software development.
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
