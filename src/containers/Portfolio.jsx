import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { animated, useTransition } from "react-spring";

import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import ContactForm from "./ContactForm/ContactForm";
import Toolbar from "../components/Navigation/Toolbar/Toolbar";
import AbsoluteWrapper from "../hoc/AbsoluteWrapper/AbsoluteWrapper";

import classes from "./Portfolio.module.css";

const Portfolio = () => {
  const location = useLocation();
  const transition = useTransition(location, (location) => location.pathname, {
    from: {
      transform: "translate3d(100%,0,0)",
      opacity: 0,
    },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });
  return (
    <div className={classes.Portfolio}>
      <Toolbar />
      {transition.map(({ item: location, props, key }) => (
        <animated.div style={props} key={key}>
          <AbsoluteWrapper>
            <Switch location={location}>
              <Route path="/about" component={About} />
              <Route path="/contact" component={ContactForm} />
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
