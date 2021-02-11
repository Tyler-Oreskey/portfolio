import React, { memo, useState } from "react";

import DesktopNav from "./DesktopNav/DesktopNav";
import MobileNav from "./MobileNav/MobileNav";

import classes from "./Navbar.module.css";

const Navbar = (props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownToggleHandler = () => setShowDropdown(!showDropdown);
  const dropdownClosedHandler = () => setShowDropdown(false);

  const navAnimation = props.passedNavbar ? classes.NavAnimation : null;

  return (
    <header
      className={[classes.Navbar, navAnimation].join(" ")}
      style={{
        position: props.passedNavbar ? "fixed" : "relative",
      }}
    >
      <nav className={classes.DesktopNav}>
        <DesktopNav
          allNavigationRefs={props.allNavigationRefs}
          scrollToDiv={props.scrollToDiv}
          closed={dropdownClosedHandler}
        />
      </nav>
      <div className={classes.MobileNav}>
        <MobileNav
          allNavigationRefs={props.allNavigationRefs}
          scrollToDiv={props.scrollToDiv}
          open={showDropdown}
          closed={dropdownClosedHandler}
          dropdownToggleHandler={dropdownToggleHandler}
        />
      </div>
    </header>
  );
};

export default memo(Navbar);
