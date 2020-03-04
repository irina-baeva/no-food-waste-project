import React, { Component } from "react";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import AppBar from "@material-ui/core/AppBar";
// import TextField from "@material-ui/core/TextField";
// import RaisedButton from "@material-ui/core/RaisedButton"
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Paper, Container, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";

const styles = {
  root: {
    flexGrow: 1,
    margin: "auto"
  },
  paper: {
    marginTop: "50%",
    // transform: "translate(0, 50%)",
    padding: 20,
    maxWidth: 600,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto"
  },
  form: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  }
};

export default withStyles(styles)(
  class UserForm extends Component {
    state = {
      firstName: "",
      email: ""
    };

    render() {
      const { classes } = this.props;
      return (
        <React.Fragment className={classes.root}>
          <Container maxWidth="sm">
            <Paper className={classes.paper}>
              <form className={classes.form}>
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <AccountCircle />
                  </Grid>
                  <Grid item>
                    <TextField
                      label="Email"
                      type="email"
                      autoComplete=""
                      id="email"
                      label="Email"
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <LockIcon />
                  </Grid>
                  <Grid item>
                    <TextField
                      style={{ marginTop: "10px" }}
                      id=""
                      label="Password"
                      type="password"
                      autoComplete="current-password"
                    />
                  </Grid>
                </Grid>
                <Button
                  style={{ marginTop: "50px" }}
                  variant="contained"
                  color="primary"
                  type="submit"
                  href="#contained-buttons"
                  label="Sign In"
                >
                  Sign In
                </Button>
              </form>
            </Paper>
          </Container>
        </React.Fragment>
      );
    }
  }
);
