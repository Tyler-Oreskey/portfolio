import React from "react";

import classes from "./Occupation.module.css";

import codeIcon from "../../../assets/images/icons/code.png";

const Occupation = () => (
  <div className={classes.Occupation}>
    <p>
      <img src={codeIcon} alt="</>" />
      Full-Stack Developer
    </p>
  </div>
);

export default Occupation;
