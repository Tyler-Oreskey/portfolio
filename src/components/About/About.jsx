import React, { useState } from "react";
import Carousel from "./Carousel/Carousel";
import SocialIcons from "./SocialIcons/SocialIcons";
import RequestHandler from '../../hoc/RequestHandler/RequestHandler';
import axios from '../../axios';
import about from "../../assets/images/me/about.jpg";
import Spinner from "../../UI/Spinner/Spinner";

import code from "../../assets/images/icons/code.png";
import downloadWhite from "../../assets/images/icons/download-white.png";
import downloadBlack from "../../assets/images/icons/download-black.png"

import classes from "./About.module.css";

const About = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [downloadIcon, setDownloadIcon] = useState(downloadWhite);

  const downloadResume = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get('/resume/getPDF');
      const downloadLink = document.createElement("a");
      const filename = "resume.pdf";
      downloadLink.href = res.data.blob;
      downloadLink.download = filename;
      downloadLink.click();
    } catch (error) {
      // handled by request handler hoc
    } finally {
      setIsLoading(false);
    }
  };


  let icon = <img src={downloadIcon} alt="download" />;

  let iconText = "RESUME";

  if (isLoading) {
    icon = <Spinner size="small" />;
    iconText = "DOWNLOADING";
  }

  let downloadButton = (
    <button
      onMouseEnter={() => setDownloadIcon(downloadBlack)}
      onMouseLeave={() => setDownloadIcon(downloadWhite)}
      disabled={isLoading}
      className={`${classes.DownloadResume} btn btn-outline-light`}
      onClick={() => downloadResume()}>
      <span className="btn-label">
        {icon}
        {iconText}
      </span>
    </button>
  );

  return (
    <div className={`${classes.About} container`}>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className={classes.Col1}>
            <h1>Hello, I'm</h1>
            <h2>Tyler Oreskey</h2>
            <h3>
              <img src={code} className={classes.DevIcon} alt="</>" />
            Full Stack Web Developer
            </h3>
            {downloadButton}
            <SocialIcons />
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
