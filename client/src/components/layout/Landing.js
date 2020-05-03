import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStylesLanding = makeStyles({
  first: {
    backgroundImage: "url('./img/food_waste.jpg')",
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
  },
});

export default function Landing() {
  const classes = useStylesLanding();
  return (
    <div className={classes.first}>
      {/* <img src="./img/food_waste.jpg" /> */}
      <div className={classes.mission}>
        The mission is <b>to fight a food waste</b>
      </div>
    </div>
  );
}
