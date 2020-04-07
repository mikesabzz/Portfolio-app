import React from 'react';
import allProjects from '../src/portfolio.json';
import Projects from './components/Projects';
import "./App.css";
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AboutMe from "./components/AboutMe"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      projects: allProjects, 
      projectsToDisplay: []
     };
  }

  componentDidMount() {
    this.setState({ projectsToDisplay: allProjects });
  }
  
  renderProjects = () => {
    return this.state.projectsToDisplay.map((project, index) => {
      const { imgURL, Title, Desc, URL, Code } = project;
      return (
        <Projects
          key={index}
          imgURL={imgURL}
          title={Title}
          desc={Desc}
          url={URL}
          code={Code}
        ></Projects>
      );
    });
  };


  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <AboutMe />
        <div className="projects">
          <div id="project-container">{this.renderProjects()}</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
