import React, { useState } from "react";

import Spinner from "../../../UI/Spinner/Spinner";
import downloadWhite from "../../../assets/images/icons/download-white.png";
import downloadBlack from "../../../assets/images/icons/download-black.png";

import classes from "./DownloadResume.module.css";

const DownloadResume = (props) => {
    const [downloadIcon, setDownloadIcon] = useState(downloadWhite);

    let icon = <img src={downloadIcon} alt="download" />;
    let iconText = "RESUME";

    if (props.isLoading) {
        icon = <Spinner size="small" />;
        iconText = "DOWNLOADING";
    }

    return (
        <button
            onMouseEnter={() => setDownloadIcon(downloadBlack)}
            onMouseLeave={() => setDownloadIcon(downloadWhite)}
            disabled={props.isLoading}
            className={`${classes.DownloadResume} btn btn-outline-light`}
            onClick={props.downloadResume}>
            <span className="btn-label">
                {icon}
                {iconText}
            </span>
        </button>
    )
};

export default DownloadResume;