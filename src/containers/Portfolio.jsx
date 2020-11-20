import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { animated, useTransition } from "react-spring";

import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import ContactForm from "./ContactForm/ContactForm";
import Toolbar from "../components/Navigation/Toolbar/Toolbar";
import AbsoluteWrapper from "../hoc/AbsoluteWrapper/AbsoluteWrapper";
import NavContext from "../context/nav-context";

import classes from "./Portfolio.module.css";

const Portfolio = () => {
  const [navItems] = useState(
    [
      {
        location: "/about",
        label: "About",
      },
      {
        location: "/experience",
        label: "Experience",
      },
      {
        location: "/projects",
        label: "Projects",
      },
      {
        location: "/contact",
        label: "Contact",
      },
    ].map((navItem, index) => ({ ...navItem, id: index }))
  );
  const [currentNavID, setCurrentNavID] = useState(1);
  const [reverse, setReverse] = useState(false);
  const location = useLocation();
  const transition = useTransition(location, (location) => location.pathname, {
    from: {
      opacity: 0,
      transform: `translate3d(${reverse ? "-100%" : "100%"},0,0)`,
    },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: {
      opacity: 0,
      transform: `translate3d(${reverse ? "100%" : "-100%"},0,0)`,
    },
  });

  useEffect(() => {
    const currentNavItem =
      navItems.find((navItem) => location.pathname === navItem.location) || 1;
    setCurrentNavID(currentNavItem.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setNavItem = (navID) => {
    setCurrentNavID(navID);
    setReverse(currentNavID > navID);
  };

  return (
    <div className={classes.Portfolio}>
      <NavContext.Provider value={{ navItems, setNavItem }}>
        <Toolbar />
      </NavContext.Provider>
      {transition.map(({ item: location, props, key }) => (
        <animated.div style={props} key={key}>
          <AbsoluteWrapper>
            <Switch location={location}>
              <Route path="/about" component={About} />
              <Route path="/contact" component={ContactForm} />
              <Route path="/experience" component={Experience} />
              <Route path="/projects" component={Projects} />
              <Redirect from="/" to="/about" />
            </Switch>
          </AbsoluteWrapper>
        </animated.div>
      ))}
    </div>
  );
};

export default Portfolio;
