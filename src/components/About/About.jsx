import React from "react";

import HexagonWithIcon from "../../UI/Shapes/Hexagon/HexagonWithIcon/HexagonWithIcon";
import HexagonWithImage from "../../UI/Shapes/Hexagon/HexagonWithImage/HexagonWithImage";

import Carousel from "./Carousel/Carousel";
import profilePhoto from "../../assets/images/photos/profile-photo.png";

import barChartData from "../../displayData/barChart";

import adjectives from "../../displayData/adjectives";

import classes from "./About.module.css";

export default function About(props) {
  return (
    <div className={classes.About} ref={props.reference}>
      <h1>ABOUT</h1>
      <div className="container">
        <div className={`${classes.AboutRow} row`}>
          <Adjectives />
        </div>
        <div className={`${classes.AboutRow} row`}>
          <Profile />
          <BarChart />
        </div>
      </div>
    </div>
  );
}

function Adjectives() {
  return adjectives.map((adjective, index) => (
    <div className="col-12 col-md-6 col-lg-3" key={index}>
      <div className={classes.AdjectiveCard}>
        <HexagonWithIcon image={adjective.image} />
        <h3>{adjective.adjective}</h3>
        <p>{adjective.description}</p>
      </div>
    </div>
  ));
}

function Profile() {
  return (
    <div className={`${classes.Profile} col-lg-6`}>
      <HexagonWithImage image={profilePhoto} />
      <h3>Who am I?</h3>
      <Carousel />
    </div>
  );
}

function BarChart() {
  const bars = barChartData.map((data, index) => (
    <div key={index}>
      <div className={classes.Bar}>
        <div className={classes.BarFill} style={{ width: `${data.percent}%` }}>
          <div className={classes.BarName}>{data.name}</div>
        </div>
        <span className={classes.PercentTag}>{data.percent}%</span>
      </div>
    </div>
  ));
  return <div className="col-lg-6">{bars}</div>;
}
