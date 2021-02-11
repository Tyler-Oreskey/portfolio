import React from "react";

import Auxiliary from "../../../../../hoc/Auxiliary/Auxiliary";
import Dropdown from "./Dropdown/Dropdown";
import DropdownToggle from "./DropdownToggle/DropdownToggle";

import classes from "./MobileNav.module.css";

const MobileNav = (props) => {
  return (
    <Auxiliary>
      <nav className={classes.MobileNav}>
        <DropdownToggle clicked={props.dropdownToggleHandler} />
      </nav>
      <Dropdown
        open={props.open}
        allNavigationRefs={props.allNavigationRefs}
        scrollToDiv={props.scrollToDiv}
        closed={props.closed}
      />
    </Auxiliary>
  );
};

export default MobileNav;
