import React from "react";

import classes from "./Footnote.module.css";

const Footnote = () => (
  <div className={classes.Footnote}>
    <p>TYLER ORESKEY </p>
    <span>©{new Date().getFullYear()}</span>
  </div>
);

export default Footnote;
