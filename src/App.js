import React, { useState, useEffect } from "react";
import { Route, Redirect, useLocation } from "react-router-dom";

import Toolbar from "./components/Navigation/Toolbar/Toolbar";
import NavContext from "./context/nav-context";
import RouteTransitions from "./routes/RouteTransitions/RouteTransitions";
import routes from "./routes/routes";

import classes from "./App.module.css";

const App = () => {
  const [currentRoute, setCurrentRouteID] = useState(1);
  const [reverse, setReverse] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const foundRoute =
      routes.find((route) => location.pathname === route.location) || 1;
    setCurrentRouteID(foundRoute.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setRoute = (navID) => {
    setCurrentRouteID(navID);
    setReverse(currentRoute > navID);
  };

  const getRoutes = (navItem) => {
    if (navItem.redirect) {
      return <Redirect key={navItem.id} from={navItem.from} to={navItem.to} />;
    }

    return (
      <Route
        key={navItem.id}
        path={navItem.location}
        component={navItem.component}
      />
    );
  };

  return (
    <div className={classes.App}>
      <NavContext.Provider value={{ routes, setRoute }}>
        <Toolbar />
      </NavContext.Provider>
      <RouteTransitions
        reverse={reverse}
        items={routes}
        location={location}
        getRoutes={getRoutes}
      />
    </div>
  );
};

export default App;
