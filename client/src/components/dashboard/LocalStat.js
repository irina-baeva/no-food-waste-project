import React, { Component, Fragment } from "react";
import Drawer from "./Drawer";
import SalesShrinkageBar from "./SalesShrinkageBar";
import WeekdayPie from "./WeekdayPie";

export default class LocalStat extends Component {
  render() {
    return (
      <Fragment>
        <Drawer />
        <SalesShrinkageBar />
        <WeekdayPie />
      </Fragment>
    );
  }
}
