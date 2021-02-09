import React from "react";

import classes from "./HexagonWithIcon.module.css";

const HexagonWithIcon = (props) => (
  <div className={classes.HexagonWithIcon}>
    <div className={classes.HexagonWithIconInside}>
      <div className={classes.HexagonWithIconImage}>
        <img src={props.image} alt="" />
      </div>
    </div>
  </div>
);

export default HexagonWithIcon;
