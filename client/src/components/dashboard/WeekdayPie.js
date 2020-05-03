import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  datasets: [
    {
      data: [2863.1071, 4054.3495, 2819.0344, 3477.4796, 9617.0413],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#cc65fe", "#64dbcf"],
      hoverBackgroundColor: [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#cc65fe",
        "#64dbcf",
      ],
    },
  ],
};
export default class WeekdayPie extends Component {
  render() {
    return (
      <div className="chartWrap">
        <h2>Proportion of shrinkage by weekday</h2>
        <Pie data={data} />
      </div>
    );
  }
}
