import React from "react";

import classes from "./DesktopNav.module.css";

import NavigationItems from "../../../NavigationItems/NavigationItems";

const DesktopNav = (props) => {
  return (
    <div className={classes.DesktopNav}>
      <NavigationItems
        allNavigationRefs={props.allNavigationRefs}
        scrollToDiv={props.scrollToDiv}
      />
    </div>
  );
};

export default DesktopNav;
