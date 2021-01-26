import React from "react";

import classes from "./HexagonWithImage.module.css";

const HexagonWithImage = (props) => (
  <div className={classes.HexagonWithImage}>
    <div className={classes.HexagonWithImageInside}>
      <div className={classes.HexagonImage}>
        <img src={props.image} alt="" />
      </div>
    </div>
  </div>
);

export default HexagonWithImage;
