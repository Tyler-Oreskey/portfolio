import React from "react";

const NavContext = React.createContext({
  navItems: {},
  setNavItem: () => {},
});

export default NavContext;
