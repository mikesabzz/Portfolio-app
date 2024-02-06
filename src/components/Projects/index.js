import React from "react";

function Projects(props) {
  const { imgURL, Title, Desc, URL, Code } = props.project;

  return (
    <div className="card h-100">
      <a href={URL} target="_blank" rel="noopener noreferrer">
        <img src={imgURL} className="card-img-top img-fluid" alt={Title} style={{ height: "200px", objectFit: "cover" }} />
      </a>
      <div className="card-body d-flex flex-column justify-content-between">
        <a href={URL} target="_blank" rel="noopener noreferrer"className="card-title"><h5>{Title}</h5></a>
        <p className="card-text">{Desc}</p>
        <a href={Code} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          See My Code
        </a>
      </div>
    </div>
  );
}

export default Projects;
