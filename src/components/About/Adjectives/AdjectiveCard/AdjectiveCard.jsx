import React from "react";

import HexagonWithIcon from "../../../../UI/Shapes/Hexagon/HexagonWithIcon/HexagonWithIcon";

import classes from "./AdjectiveCard.module.css";

const AdjectiveCard = (props) => (
  <div className={classes.AdjectiveCard}>
    <HexagonWithIcon image={props.image} />
    <h3>{props.adjective}</h3>
    <p>{props.description}</p>
  </div>
);
export default AdjectiveCard;
