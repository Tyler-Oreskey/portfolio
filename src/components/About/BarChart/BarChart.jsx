import React from "react";

import Bar from "./Bar/Bar";

import classes from "./BarChart.module.css";

import barChartData from "../../../displayData/barChart";

const BarChart = () => {
  const bars = barChartData.map((data, index) => {
    return (
      <div key={index}>
        <Bar name={data.name} percent={data.percent} />
      </div>
    );
  });
  return <div className="col-md-7">{bars}</div>;
};

export default BarChart;
