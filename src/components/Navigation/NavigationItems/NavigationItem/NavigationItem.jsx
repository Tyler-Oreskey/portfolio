import React from "react";

import classes from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  return (
    <li
      className={classes.NavigationItem}
      onClick={() => props.scrollToDiv(props.item.ref)}
    >
      {props.name.toUpperCase()}
    </li>
  );
};

export default NavigationItem;
