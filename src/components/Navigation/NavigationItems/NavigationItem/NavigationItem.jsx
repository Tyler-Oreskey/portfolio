import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  const style = {
    color: "red",
    fontWeight: "bold",
  };
  return (
    <li className={classes.NavigationItem}>
      <NavLink to={props.location} activeStyle={style}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
