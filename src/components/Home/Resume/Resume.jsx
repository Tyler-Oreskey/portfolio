import React, { useState } from "react";

import RequestHandler from "../../../hoc/RequestHandler/RequestHandler";
import axios from "../../../axios";
import Spinner from "../../../UI/Spinner/Spinner";
import ButtonHoverEffect from "../../../UI/Buttons/ButtonHoverEffect/ButtonHoverEffect";

const Resume = () => {
  const [loading, setLoading] = useState(false);

  const initiateDownload = async () => {
    try {
      setLoading(true);
      const res = await axios.resume.get("/resume/getPDF");
      const arr = new Uint8Array(res.data.resumeBuffer.buffer.data);
      const blob = new Blob([arr], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "resume.pdf";
      link.click();
      setTimeout(() => {
        // firefox and safari browsers
        window.URL.revokeObjectURL(url);
      }, 100);
    } catch (error) {
      // handled by request handler hoc
    } finally {
      setLoading(false);
    }
  };

  let downloadResumeButton = (
    <ButtonHoverEffect
      clicked={initiateDownload}
      buttonText="Resume"
      textColor="white"
    />
  );

  if (loading) {
    downloadResumeButton = <Spinner size="medium" />;
  }

  return <div>{downloadResumeButton}</div>;
};

export default RequestHandler(Resume, axios.resume);
