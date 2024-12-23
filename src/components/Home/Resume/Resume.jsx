import React from "react";

import ButtonHoverEffect from "../../../UI/Buttons/ButtonHoverEffect/ButtonHoverEffect";
import resume from "../../../assets/files/resume.pdf";

export default function Resume() {
  const initiateDownload = async () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <ButtonHoverEffect
        clicked={initiateDownload}
        buttonText="Resume"
        textColor="white"
      />
    </div>
  );
}
