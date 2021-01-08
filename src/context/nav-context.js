import React from "react";

const NavContext = React.createContext({
  routes: {},
  setNavItem: () => {},
});

export default NavContext;
