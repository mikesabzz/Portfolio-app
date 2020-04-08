import React from "react";
import './Projects.css';

function Projects(props) {
    return (
        <div className="projects-each">
            <div className="image-wrapper">
                <div className="project-link"><a href={props.url} alt="Loading...">
                    <div className="project-title">{props.title}</div>
                </a>
                    <img src={props.imgURL} className="project-image" alt=""></img>
                </div>
                <div className="project-info">
                    <div className="project-desc">{props.desc}</div>
                    <div className="project-code"><a target="_blank" href={props.code}>See My Code</a></div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Projects;