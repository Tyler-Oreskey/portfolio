import React from "react";
import { Link } from "react-scroll";

import classes from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  const activeStyle = {
    color: "#00BFFF",
    fontWeight: "bold",
  };
  return (
    <li className={classes.NavigationItem}>
      <Link
        to={props.item.label.toLowerCase()}
        duration={200}
        activeClass="active"
        spy={true}
        className={classes.NavLink}
      >
        {props.item.label}
      </Link>
    </li>
  );
};

export default NavigationItem;
