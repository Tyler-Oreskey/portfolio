import React from "react";
import Carousel from "./Carousel/Carousel";
import SocialIcons from "./SocialIcons/SocialIcons";
import RequestHandler from '../../hoc/RequestHandler/RequestHandler';
import axios from '../../axios';
import about from "../../assets/images/me/about.jpg";

import code from "../../assets/images/icons/code.png";
import classes from "./About.module.css";

const About = () => {

  const downloadResume = async () => {
    const res = await axios.get('/resume/getPDF');
    const downloadLink = document.createElement("a");
    const filename = "resume.pdf";
    downloadLink.href = res.data.blob;
    downloadLink.download = filename;
    downloadLink.click();
  };

  return (
    <div className={`${classes.About} container`}>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className={classes.Col1}>
            <h1>Hello, I'm Testing</h1>
            <h2>Tyler Oreskey</h2>
            <h3>
              <img src={code} className={classes.DevIcon} alt="</>" />
            Full Stack Web Developer
            <SocialIcons />
            </h3>
            <button
              onClick={() => downloadResume()}>
              Download Resume
            </button>
            <Carousel />
          </div>
        </div>
        <div className="col-12 order-first order-md-0 col-md-6">
          <div className={classes.Col2}>
            <img className={classes.Me} src={about} alt="me" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestHandler(About, axios);
