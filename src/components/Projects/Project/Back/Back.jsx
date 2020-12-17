import React from "react";

import classes from "./Back.module.css";

const Back = (props) => {
    const formattedTechs = props.techs
        .map((tech, index) => {
            if (index === props.techs.length - 1) {
                return `and ${tech}.`;
            }
            return tech;
        })
        .join(", ")
        .replace(/,([^,]*)$/, "$1");

    const icons = props.projectIcons.map((icon, index) =>
        <a key={index} href={icon.href} target="_blank" rel="noopener noreferrer">
            <img src={icon.src} alt={icon.alt} />
        </a>
    );

    return (
        <div className={classes.Back}>
            <h2>{props.projectName}</h2>
            <p>{props.projectDescription}</p>
            <div>
                <h3>Technology Used:</h3>
                <p>{formattedTechs}</p>
            </div>
            <div className={classes.CardIcons}>
                {icons}
            </div>
            <button
                onClick={props.flip}
                className={classes.FlipText}
            >
                FLIP
        </button>
        </div>
    )
}

export default Back;