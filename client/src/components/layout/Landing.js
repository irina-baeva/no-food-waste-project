import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStylesLanding = makeStyles({
  first: {
    // backgroundImage: "url('./img/food_waste.jpg')",
    backgroundColor: "f2f0f1",
    backgroundSize: "cover",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "flex-end",
  },
  mission: {
    fontFamily: "Helvetica",
    fontSize: "30px",
    textTransform: "uppercase",
    margin: "20px",
    display: "flex",
    flexDirection: "column",
    textAlign: "end",
    marginTop: "10%",
  },
});

export default function Landing() {
  const classes = useStylesLanding();
  return (
    <div className={classes.first}>
      {/* <img src="./img/food_waste.jpg" /> */}
      <div className={classes.mission}>
        <div>The mission is </div>
        <span>
          <b>to fight a food waste</b>
        </span>
      </div>
    </div>
  );
}
