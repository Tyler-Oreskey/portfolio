import React, { useState } from "react";
import Front from "./Front/Front";
import Back from "./Back/Back";
import classes from "./Project.module.css";

export default function Project({ project, clickShowModal }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={classes.Card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <Back
          clickShowModal={() => clickShowModal(project)}
          name={project.name}
          description={project.description}
          techs={project.techs}
          projectLinks={project.projectLinks}
        />
      ) : (
        <Front backgroundImage={project.image} />
      )}
    </div>
  );
}
