import React from "react";

import classes from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  const updateNavs = (ref) => {
    props.closed();
    props.scrollToDiv(ref);
  };
  return (
    <li
      className={classes.NavigationItem}
      onClick={() => updateNavs(props.item.ref)}
    >
      {props.name.toUpperCase()}
    </li>
  );
};

export default NavigationItem;
