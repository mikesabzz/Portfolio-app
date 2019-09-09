import React from "react";
import './Projects.css';

function Projects(props) {
    return (
        <div className="projects-each">
            <div className="image-wrapper">
                <img src={props.imgURL} className="project-image" alt=""></img>
            </div>
            <div className="project-info">
                <div className="project-link"><a href={props.url}>
                    <div className="project-title">{props.title}</div>
                </a>
                    <div className="project-desc">{props.desc}</div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Projects;