import React from "react";

import classes from "./Front.module.css";

const Front = (props) => {
  return (
    <div
      className={classes.Front}
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    >
      <h1>{props.projectName}</h1>
      <button onClick={props.flip} className={classes.FlipText}>
        FLIP
      </button>
    </div>
  );
};

export default Front;
