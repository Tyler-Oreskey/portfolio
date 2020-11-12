import React from "react";

const SocialIcon = (props) => {
  return (
    <a href={props.destination} target="_blank" rel="noopener noreferrer">
      <img src={props.icon} alt={props.name} />
    </a>
  );
};

export default SocialIcon;
