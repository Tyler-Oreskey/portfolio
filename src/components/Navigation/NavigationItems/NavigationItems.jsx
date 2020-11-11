import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

import classes from "./NavigationItems.module.css";

const NavigationItems = () => {
  return (
    <div className={classes.NavigationItems}>
      <header>
        <nav>
          <ul>
            <NavigationItem location="/projects">Projects</NavigationItem>
            <NavigationItem location="/about">About</NavigationItem>
            <NavigationItem location="/contact">Contact</NavigationItem>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavigationItems;
