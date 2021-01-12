import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";

import classes from "./NavigationItems.module.css";

const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      {props.routes.map((navItem) => (
        <NavigationItem
          key={navItem.id}
          navID={navItem.id}
          location={navItem.location}
          clicked={props.toggleRoute}
        >
          {navItem.label}
        </NavigationItem>
      ))}
    </ul>
  );
};

export default NavigationItems;
