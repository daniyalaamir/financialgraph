import React from "react";
import ReactApexChart from "react-apexcharts";
import lineChart from "./config/lineChart";

const Chart = () => {
  return (
    <ReactApexChart 
      type="line"
      width="100%"
      height={400}
      options={lineChart.options}
      series={lineChart.series}
    />
  );
}

export default Chart;
