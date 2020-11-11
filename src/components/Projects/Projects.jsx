import React, { Component } from "react";
import { Link } from "react-router-dom";

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
      },
      {
        id: 2,
        name: "Good Samaratin",
        description: "Good Samaratin description...",
      },
      {
        id: 3,
        name: "Hackateam",
        description: "Hackateam description...",
      },
    ];
    this.setState({ projects: projectsData });
  }
  render() {
    const projects = this.state.projects.map((project) => {
      return (
        <Link
          key={project.id}
          to={{
            pathname: `/${project.id}`,
            state: {
              name: project.name,
              description: project.description,
            },
          }}
        >
          <article className={classes.Project}>{project.name}</article>
        </Link>
      );
    });

    return (
      <div className={classes.Projects}>
        <h1>Projects Page!!!</h1>
        <ul>{projects}</ul>
      </div>
    );
  }
}

export default Projects;
