import React from "react";

import classes from "./HexagonWithImage.module.css";

const HexagonWithImage = (props) => (
  <div className={classes.HexagonContainer}>
    <div className={classes.Hexagon}>
      <div className={classes.Shape}>
        <img src={props.image} alt="" />
      </div>
    </div>
  </div>
);

export default HexagonWithImage;
