import React from "react";

import classes from "./DesktopNav.module.css";

import NavigationItems from "../../../NavigationItems/NavigationItems";

const DesktopNav = (props) => {
  return (
    <div className={classes.DesktopNav}>
      <NavigationItems
        allNavigationRefs={props.allNavigationRefs}
        scrollToDiv={props.scrollToDiv}
        closed={props.closed}
      />
    </div>
  );
};

export default DesktopNav;
