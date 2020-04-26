import React, { Component } from "react";
import Chart from "chart.js";
import { Drawer } from "@material-ui/core";
// import classes from "./LineGraph.module.css";
// import Data from './january.csv'
export default class LineGraph extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        //Bring in data
        labels: [
          "2020-01-02",
          "2020-01-03",
          "2020-01-06",
          " 2020-01-07",
          "2020-01-08",
          "2020-01-09",
          "2020-01-10",
          " 2020-01-13",
          " 2020-01-14",
          "2020-01-15",
          "2020-01-16",
          "2020-01-17",
          "2020-01-20",
          "2020-01-21",
          "2020-01-22",
          "2020-01-23",
          "2020-01-24",
          "2020-01-27",
          "2020-01-28",
          " 2020-01-29",
          "2020-01-30",
          "2020-01-31",
        ],
        datasets: [
          {
            label: "Sales",
            data: [
              32850,
              31077.26,
              38821,
              26094.23,
              30270,
              29162,
              18242,
              39469,
              35434,
              25081,
              41239,
              23136,
              51498,
              30925,
              33412,
              31381,
              20504,
              36640,
              48451,
              29777,
              28780,
            ],
          },
        ],
      },
      options: {
        //Customize chart options
      },
    });
  }
  render() {
    return (
      <div>
        <Drawer />
        <canvas id="myChart" ref={this.chartRef} />
      </div>
    );
  }
}
