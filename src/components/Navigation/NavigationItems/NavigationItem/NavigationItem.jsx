import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  const style = {
    color: "#00BFFF",
    fontWeight: "bold",
  };

  return (
    <li
      className={classes.NavigationItem}
      onClick={() => props.clicked(props.navID)}
    >
      <NavLink
        to={props.location}
        activeStyle={style}
        className={classes.NavLink}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
