import React, { useState } from "react";
import classes from "./Project.module.css";

import ButtonHoverEffect from "../../../UI/Buttons/ButtonHoverEffect/ButtonHoverEffect";

export default function Project({ project, clickShowModal }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={classes.Card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`${classes.Background} ${isHovered ? classes.Hovered : ""}`}
        style={{ backgroundImage: `url(${project.image})` }}
      ></div>
      <div className={classes.Content}>
        <h1 className={classes.ProjectName}>{project.name}</h1>
        {isHovered && (
          <div className={classes.ButtonOverlay}>
            <ButtonHoverEffect
              clicked={() => clickShowModal(project)}
              buttonText="LEARN MORE"
              textColor="white"
            />
          </div>
        )}
      </div>
    </div>
  );
}
