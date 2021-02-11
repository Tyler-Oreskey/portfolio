import React from "react";

import classes from "./Greeting.module.css";

const Greeting = () => (
  <div className={classes.Greeting}>
    <p>Hello, I'm </p>
    <span>Tyler Oreskey</span>
  </div>
);

export default Greeting;
