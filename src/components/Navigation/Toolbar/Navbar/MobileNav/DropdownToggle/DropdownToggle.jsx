import React from "react";

import classes from "./DropdownToggle.module.css";

const DropdownToggle = (props) => (
  <div className={classes.DropdownToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default DropdownToggle;
