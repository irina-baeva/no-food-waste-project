import React, { Component } from "react";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import AppBar from "@material-ui/core/AppBar";
// import TextField from "@material-ui/core/TextField";
// import RaisedButton from "@material-ui/core/RaisedButton"
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { AppBar } from "@material-ui/core";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";

const palette = {
  primary: { main: "#80CBC4", contrastText: "#FAFAFA" },
  secondary: { main: "#B2DFDB", contrastText: "#FAFAFA" }
};
const themeName = "Monte Carlo Aqua Island Badger";
let theme = createMuiTheme({ palette, themeName });
export default class UserForm extends Component {
  state = {
    firstName: "",
    email: ""
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar>
            <Toolbar variant="dense">
              <Typography variant="h6" color="inherit">
                Sustanable METRO
              </Typography>
            </Toolbar>
          </AppBar>
          <TextField
            style={{ marginTop: "50px" }}
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
