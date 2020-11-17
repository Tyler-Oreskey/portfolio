import React, { useContext } from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import NavContext from "../../../context/nav-context";

import classes from "./NavigationItems.module.css";

const NavigationItems = () => {
  const { setNavItem, navItems } = useContext(NavContext);

  const setNavID = (navID) => setNavItem(navID);

  return (
    <ul className={classes.NavigationItems}>
      {navItems.map((navItem) => (
        <NavigationItem
          key={navItem.id}
          navID={navItem.id}
          location={navItem.location}
          clicked={setNavID}
        >
          {navItem.label}
        </NavigationItem>
      ))}
    </ul>
  );
};

export default NavigationItems;
