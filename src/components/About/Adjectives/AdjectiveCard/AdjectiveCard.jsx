import React from "react";

import classes from "./AdjectiveCard.module.css";

import HexagonWithIcon from "../../../../UI/Hexagon/HexagonWithIcon/HexagonWithIcon";

const AdjectiveCard = (props) => (
  <div className={classes.AdjectiveCard}>
    <HexagonWithIcon image={props.image} />
    <h3>{props.adjective}</h3>
    <p>{props.description}</p>
  </div>
);
export default AdjectiveCard;
