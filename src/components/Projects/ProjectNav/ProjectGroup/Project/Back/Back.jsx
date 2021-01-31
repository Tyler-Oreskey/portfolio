import React from "react";

import classes from "./Back.module.css";

const Back = (props) => {
  return (
    <div className={classes.Back}>
      <h2>{props.projectName}</h2>
      <button onClick={props.flip} className={classes.FlipText}>
        FLIP
      </button>
    </div>
  );
};

export default Back;
