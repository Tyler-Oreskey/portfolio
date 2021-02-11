import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";

import classes from "./NavigationItems.module.css";

const NavigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    {Object.entries(props.allNavigationRefs).map(([key, value], index) => (
      <NavigationItem
        key={index}
        name={key}
        item={value}
        scrollToDiv={props.scrollToDiv}
      />
    ))}
  </ul>
);

export default NavigationItems;
