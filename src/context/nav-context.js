import React from "react";

const NavContext = React.createContext({
  routes: {},
  setRoute: () => {},
});

export default NavContext;
