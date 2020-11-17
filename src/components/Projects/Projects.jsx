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
        description:
          "Fishermen web application allowing recording of catch information. Location marker, fish species, equipment, and tackle used are posted into a PostgreSQL database. Data is rendered as a Gmaps API marker and accessible to the rest of the fishermen community.",
        techs: [
          "React with Redux",
          "HTML",
          "CSS",
          "JavaScript",
          "Bootstrap",
          "Node.js",
          "PostgreSQL",
          "Express.js",
          "Knex",
          "JOI validation",
        ],
        image:
          "https://www.greaterseattleonthecheap.com/wordpress/wp-content/uploads/2020/05/Fly-fishing-with-Emerald-Water-Anglers.jpg",
      },
      {
        id: 2,
        name: "Good Samaratin",
        description:
          "Mobile application presenting the user a choice of actions for emergency situations. An emergency event allows the user to call 911 and presents a list of steps to aid the person while help is on its way. Alternate solutions are offered to approach a specific emergency to aid in saving a life.",
        techs: [
          "React Native with Redux",
          "HTML",
          "CSS",
          "JavaScript",
          "Bootstrap",
          "Node.js",
          "PostgreSQL",
          "Express.js",
          "Knex",
          "JOI validation",
        ],
        image:
          "https://www.benzinga.com/files/images/story/2012/life-extension-technology-and-cannabis-formulations.jpg",
      },
      {
        id: 3,
        name: "Hackateam",
        description:
          "Web application that encourages people of all coding skill levels to collaborate and hack together based on similar skill sets or project interests. The app alleviates complexities in finding or creating at team based off skill set, interests, personality, and cultural diversity.",
        techs: [
          "DOM Manipulation",
          "HTML",
          "CSS",
          "JavaScript",
          "Bootstrap",
          "Node.js",
          "PostgreSQL",
          "Express.js",
          "Knex",
        ],
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
          techs={project.techs}
          image={project.image}
        ></Project>
      );
    });

    return <div className={classes.Projects}>{projects}</div>;
  }
}

export default Projects;
