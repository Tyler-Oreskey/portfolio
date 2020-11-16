import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

import classes from "./NavigationItems.module.css";

const NavigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem location="/about">About</NavigationItem>
      <NavigationItem location="/projects">Projects</NavigationItem>
      <NavigationItem location="/contact">Contact</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
