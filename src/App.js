import React from "react";
import allProjects from "../src/portfolio.json";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import DocumentTitle from "react-document-title";
import { Element } from "react-scroll";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectsToDisplay: allProjects,
    };
  }

  renderProjects = () => {
    return this.state.projectsToDisplay.map((project, index) => (
      <div key={index} className="col-lg-4 col-md-6 mb-4">
        <Projects project={project} />
      </div>
    ));
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
