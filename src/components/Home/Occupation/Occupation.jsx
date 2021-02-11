import React from "react";

import codeIcon from "../../../assets/images/icons/code.png";

import classes from "./Occupation.module.css";

const Occupation = () => (
  <div className={classes.Occupation}>
    <p>
      <img src={codeIcon} alt="</>" />
      Full-Stack Web Developer
    </p>
  </div>
);

export default Occupation;
