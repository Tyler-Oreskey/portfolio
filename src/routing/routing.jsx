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

const Routes = () => {
  const routes = useState(
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
};

export default Routes;
