import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../../UI/Backdrop/Backdrop";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

import classes from "./SideDrawer.module.css";

const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];

  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Auxiliary>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <nav>
          <NavigationItems clicked={props.closed} />
        </nav>
      </div>
    </Auxiliary>
  );
};

export default SideDrawer;
