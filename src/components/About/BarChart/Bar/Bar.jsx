import React from "react";

import classes from "./Bar.module.css";

const Bar = (props) => (
  <div className={classes.Bar}>
    <div className={classes.BarFill} style={{ width: `${props.percent}%` }}>
      <div className={classes.BarName}>{props.name}</div>
    </div>
    <span className={classes.PercentTag}>{props.percent}%</span>
  </div>
);

export default Bar;
