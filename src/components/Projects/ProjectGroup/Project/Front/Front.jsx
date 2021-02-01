import React from "react";

import classes from "./Front.module.css";

const Front = (props) => {
  const { backgroundImage } = props;
  return (
    <div
      className={classes.Front}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1>{props.projectName}</h1>
    </div>
  );
};

export default Front;
