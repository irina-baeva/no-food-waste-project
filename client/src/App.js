import React, { Fragment } from "react";
import "./App.css";
// import Landing from "./components/layout/Landing";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import UserForm from "./components/layout/UserForm";
import Navbar from "./components/layout/Navbar";

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
        {/* <Navbar /> */}
        <UserForm />
      </Fragment>
    </MuiThemeProvider>
  );
}

export default App;
