import React from 'react';
import allProjects from '../src/portfolio.json';
import Projects from './components/Projects';
import "./App.css";
import Header from './components/Header'
import Footer from './components/Footer'
import AboutMe from "./components/AboutMe"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projects: allProjects, projectsToDisplay: [] };
  }

  componentDidMount() {
    this.setState({ projectsToDisplay: allProjects });
  }
  
  renderProjects = () => {
    return this.state.projectsToDisplay.map((project, index) => {
      const { imgURL, Title, Desc, URL } = project;
      return (
        <Projects
          key={index}
          imgURL={imgURL}
          title={Title}
          desc={Desc}
          url={URL}
        ></Projects>
      );
    });
  };


  render() {
    return (
      <div>
      <Header></Header>
      <AboutMe></AboutMe>
      <div className="projects">
        <div className="project-container">{this.renderProjects()}</div>
      </div>
      <Footer></Footer>
      </div>
    );
  }
}

export default App;
