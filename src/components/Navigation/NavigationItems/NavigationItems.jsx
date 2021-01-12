import React, { useContext } from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import NavContext from "../../../context/nav-context";

import classes from "./NavigationItems.module.css";

const NavigationItems = () => {
  const { setRoute, routes } = useContext(NavContext);

  const setRouteID = (navID) => setRoute(navID);

  return (
    <ul className={classes.NavigationItems}>
      {routes.map((navItem) => (
        <NavigationItem
          key={navItem.id}
          navID={navItem.id}
          location={navItem.location}
          clicked={setRouteID}
        >
          {navItem.label}
        </NavigationItem>
      ))}
    </ul>
  );
};

export default NavigationItems;
