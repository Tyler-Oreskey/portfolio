import React from "react";

import Bar from "./Bar/Bar";

import classes from "./BarChart.module.css";

import barChartData from "../../../displayData/barChart";

const BarChart = () => {
  const bars = barChartData.map((data, index) => (
    <div key={index}>
      <Bar name={data.name} percent={data.percent} />
    </div>
  ));
  return <div className="col-lg-6">{bars}</div>;
};

export default BarChart;
