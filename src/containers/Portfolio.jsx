import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Projects from "../components/Projects/Projects";
import Project from "../components/Projects/Project/Project";
import About from "../components/About/About";
import ContactForm from "./ContactForm/ContactForm";
import NavigationItems from "../components/Navigation/NavigationItems/NavigationItems";

const Portfolio = () => {
  return (
    <div>
      <NavigationItems />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={ContactForm} />
        <Route path="/projects/:id" component={Project} />
        <Route path="/projects" component={Projects} />
        <Redirect from="/" to="/projects" />
      </Switch>
    </div>
  );
};

export default Portfolio;
