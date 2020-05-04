import React, { Component } from "react";

import { Line } from "react-chartjs-2";

const data = {
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
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      data: [
        32880,
        31093.26,
        38821,
        26127,
        30303,
        29185,
        18454,
        39615,
        35434,
        25081,
        41239,
        23136,
        51498,
        31173,
        33412,
        31531,
        20548,
        36643,
        48455,
        29970,
        28780,
        19866,
      ],
    },
    {
      label: "Shrinkage",
      backgroundColor: "rgba(84,173,164,1)",
      borderColor: "rgba(84,173,164,1)",
      data: [
        925.66,
        4435.6,
        1797.996,
        1708.78,
        839.88,
        1087.15,
        2644.24,
        313.72,
        1116.8,
        1197.4,
        657.52,
        1042.1,
        501.4,
        1028.7,
        761.4,
        807.1,
        1298.0,
        249.9,
        199.9,
        20.2,
        0,
        196.9,
      ],
    },
  ],
};

export default class SalesShrinkageBar extends Component {
  render() {
    return (
      <div className="chartWrap">
        <h2>
          Trends of shrinkage, sales in euros between 1st and 31st of January
          2020.
        </h2>
        <Line
          className="barChartWrap"
          data={data}
          id="cv"
          options={{
            scales: {
              xAxes: [
                {
                  ticks: {
                    autoSkip: false,
                    maxRotation: 90,
                    minRotation: 90,
                  },
                },
              ],
            },
          }}
        />
      </div>
    );
  }
}
