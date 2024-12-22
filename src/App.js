import React, { useRef } from "react";

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Toolbar from "./components/Navigation/Toolbar/Toolbar";

import classes from "./App.module.css";

const App = () => {
  const scrollToDiv = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const nonNavigableRefs = {
    home: { ref: useRef(null), name: "home" },
  };

  const allNavigationRefs = {
    about: { ref: useRef(null), name: "about" },
    projects: { ref: useRef(null), name: "projects" },
    contact: { ref: useRef(null), name: "contact" },
  };

  return (
    <div className={classes.App}>
      <Home
        reference={nonNavigableRefs.home.ref}
        click={() => scrollToDiv(allNavigationRefs.about.ref)}
      />
      <Toolbar
        allNavigationRefs={allNavigationRefs}
        scrollToDiv={scrollToDiv}
      />
      <About reference={allNavigationRefs.about.ref} />
      <Projects reference={allNavigationRefs.projects.ref} />
      <Contact reference={allNavigationRefs.contact.ref} />
      <Footer click={() => scrollToDiv(nonNavigableRefs.home.ref)} />
    </div>
  );
};

export default App;
