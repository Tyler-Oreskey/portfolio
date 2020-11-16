import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Projects from "../components/Projects/Projects";
import Project from "../components/Projects/Project/Project";
import About from "../components/About/About";
import ContactForm from "./ContactForm/ContactForm";
import Toolbar from "../components/Navigation/Toolbar/Toolbar";

import classes from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <div className={classes.Portfolio}>
      <Toolbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={ContactForm} />
        <Route path="/projects/:id" component={Project} />
        <Route path="/projects" component={Projects} />
        <Redirect from="/" to="/about" />
      </Switch>
    </div>
  );
};

export default Portfolio;
