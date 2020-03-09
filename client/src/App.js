import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import "./App.css";
// import Landing from "./components/layout/Landing";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Login from "./components/Auth/Login";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";

const palette = {
  primary: { main: "#80CBC4", contrastText: "#FAFAFA" },
  secondary: { main: "#B2DFDB", contrastText: "#FAFAFA" }
};
const themeName = "Monte Carlo Aqua Island Badger";
let theme = createMuiTheme({ palette, themeName });
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Fragment>
        <Navbar />
        {/* <Route exact path='/' component = {Landing} /> */}
      </Fragment>
    </MuiThemeProvider>
  );
}

export default App;
