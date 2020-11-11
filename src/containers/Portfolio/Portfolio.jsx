import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import Projects from "../../components/Projects/Projects";
import Project from "../../components/Projects/Project/Project";
import About from "../../components/About/About";
import ContactForm from "../../components/ContactForm/ContactForm";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact Me</NavLink>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/contact" component={ContactForm} />
          <Route path="/" exact component={Projects} />
          <Route path="/:id" component={Project} />
        </Switch>
      </div>
    );
  }
}

export default Portfolio;
