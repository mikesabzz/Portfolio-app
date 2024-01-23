import React from "react";
import allProjects from "../src/portfolio.json";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import DocumentTitle from "react-document-title";
import { Element } from "react-scroll";

// If app is down https://twitter-clone-by-sabz.surge.sh/

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsToDisplay: allProjects,
    };
  }

  renderProjects = () => {
    const projectsByStack = {};

    // Group projects by Stack
    this.state.projectsToDisplay.forEach((project) => {
      const stack = project.Stack;
      if (!projectsByStack[stack]) {
        projectsByStack[stack] = [];
      }
      projectsByStack[stack].push(project);
    });
    return (
      <div className="container">
        {Object.keys(projectsByStack).map((stack, index) => (
          <div key={index}>
            <h2 className="bg-secondary text-white text-center">{stack}</h2>
            <div className="row">
              {projectsByStack[stack].map((project, projectIndex) => (
                <div key={projectIndex} className="col-lg-4 col-md-6 mb-4">
                  <Projects project={project} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  render() {
    return (
      <DocumentTitle title="Michael Sabzevari">
        <div>
          <Navbar />
          <Header />
          <Element name="about-me">
            <AboutMe />
          </Element>
          <Element name="project-container">
            <div className="container">
              <div className="row">{this.renderProjects()}</div>
            </div>
          </Element>
          <Element name="footer">
            <Footer />
          </Element>
        </div>
      </DocumentTitle>
    );
  }
}

export default App;
