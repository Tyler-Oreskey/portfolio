import React, { useState } from "react";

import RequestHandler from "../../hoc/RequestHandler/RequestHandler";
import axios from "../../axios";
import Carousel from "./Carousel/Carousel";
import SocialIcons from "./SocialIcons/SocialIcons";
import ProfileItems from "./ProfileItems/ProfileItems";
import ProfilePhoto from "./ProfilePhoto/ProfilePhoto";
import DownloadResume from "./DownloadResume/DownloadResume";
import Particles from "../../UI/Particles/Particles";

import classes from "./About.module.css";

const About = () => {
  const [isLoading, setIsLoading] = useState(false);

  const downloadResume = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get("/resume/getPDF");
      const arr = new Uint8Array(res.data.buffer.data);
      const blob = new Blob([arr], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "resume.pdf";
      link.click();
      setTimeout(() => {
        // for firefox and safari browsers
        window.URL.revokeObjectURL(url);
      }, 100);
    } catch (error) {
      // handled by request handler hoc
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={classes.AboutVerticalCenter}>
      <Particles />
      <div className={`${classes.About} container`}>
        <div className="row">
          <div className="col-12 col-md-6">
            <ProfileItems />
            <DownloadResume
              isLoading={isLoading}
              downloadResume={downloadResume}
            />
            <SocialIcons />
            <Carousel />
          </div>
          <div className="d-flex order-first col-md-6">
            <ProfilePhoto />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestHandler(About, axios);
