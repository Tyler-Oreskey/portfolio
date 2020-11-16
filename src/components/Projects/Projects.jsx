import React, { Component } from "react";
import Project from "./Project/Project";

import classes from "./Projects.module.css";

class Projects extends Component {
  state = {
    projects: [],
  };

  componentDidMount() {
    const projectsData = [
      {
        id: 1,
        name: "Fishtopia",
        description: "Fishtopia description...",
        image:
          "https://www.greaterseattleonthecheap.com/wordpress/wp-content/uploads/2020/05/Fly-fishing-with-Emerald-Water-Anglers.jpg",
      },
      {
        id: 2,
        name: "Good Samaratin",
        description: "Good Samaratin description...",
        image:
          "https://www.benzinga.com/files/images/story/2012/life-extension-technology-and-cannabis-formulations.jpg",
      },
      {
        id: 3,
        name: "Hackateam",
        description: "Hackateam description...",
        image:
          "https://www.phocuswire.com/uploadedimages/uploads/2018/01/hedna-hackathon.jpg?width=800&height=400&scale=both&mode=crop",
      },
    ];
    this.setState({ projects: projectsData });
  }
  render() {
    const projects = this.state.projects.map((project) => {
      return (
        <Project
          key={project.id}
          name={project.name}
          description={project.description}
          image={project.image}
        ></Project>
      );
    });

    return <div className={classes.Projects}>{projects}</div>;
  }
}

export default Projects;
