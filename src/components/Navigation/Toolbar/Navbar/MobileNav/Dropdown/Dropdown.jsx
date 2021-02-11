import React from "react";

import NavigationItems from "../../../../NavigationItems/NavigationItems";

import classes from "./Dropdown.module.css";

const Dropdown = (props) => {
  let attachedClasses = [classes.Dropdown, classes.Close];

  if (props.open) {
    attachedClasses = [classes.Dropdown, classes.Open];
  }

  return (
    <div className={attachedClasses.join(" ")}>
      <NavigationItems
        closed={props.closed}
        allNavigationRefs={props.allNavigationRefs}
        scrollToDiv={props.scrollToDiv}
      />
    </div>
  );
};

export default Dropdown;
