import React, { useState, useEffect, useRef } from "react";

import Navbar from "./Navbar/Navbar";

import classes from "./Toolbar.module.css";

const Toolbar = (props) => {
  const [passedNavbar, setPassedNavbar] = useState(false);
  const [startingPosition, setStartingPosition] = useState(0);
  const navbarRef = useRef(null);

  useEffect(() => {
    setStartingPosition(navbarRef.current.getBoundingClientRect().bottom);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const yScroll = navbarRef.current.getBoundingClientRect().bottom;
      if (yScroll <= 0 && !passedNavbar) {
        setPassedNavbar(true);
      }
      if (yScroll > 0 && passedNavbar) {
        setPassedNavbar(false);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [passedNavbar, startingPosition]);

  return (
    <div className={classes.Toolbar} ref={navbarRef}>
      <Navbar
        passedNavbar={passedNavbar}
        allNavigationRefs={props.allNavigationRefs}
        scrollToDiv={props.scrollToDiv}
      />
    </div>
  );
};

export default Toolbar;
