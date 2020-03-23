import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from '../../actions/auth'
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import AppBar from "@material-ui/core/AppBar";
// import TextField from "@material-ui/core/TextField";
// import RaisedButton from "@material-ui/core/RaisedButton"
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Paper, Container, Grid, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import Input from "@material-ui/core/Input";
import FilledInput from "@material-ui/core/FilledInput";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStylesLogin = makeStyles({
  root: {
    flexGrow: 1,
    margin: "auto"
  },
  paper: {
    padding: 20,
    maxWidth: 600,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    flexDirection: "column",
    marginTop: "1.2rem 0",
  },
  form: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  }
});

const Login = ({login}) => {
  const classes = useStylesLogin();
  //useState hook
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const onChange = e => setFormData({
    ...formData,
    [e.target.name]: e.target.value
});

  const onSubmit = async e => {
    e.preventDefault();
    login(email, password)
  }


  return (
    <React.Fragment >
      <Container className={classes.root} maxWidth="sm">
        <p >
        <FontAwesomeIcon icon={faUser} /> Log into your account</p>
        <Paper className={classes.paper}>
          <form className={classes.form} onSubmit={e => onSubmit(e)}>
        
                        <FormControl>
                            <Input
                                type="email"
                                placeholder="Email Address"
                                name="email"
                                value={email}
                                onChange={e => onChange(e)}
                            />
                        </FormControl>
                        <FormControl >
                            <Input
                                type="password"
                                placeholder="Password"
                                name="password"
                                minLength="6"
                                value={password}
                                onChange={e => onChange(e)}
                            />
                        </FormControl>
                        <Button
                            variant="contained"
                            style={{ marginTop: "50px" }}
                            color="primary"
                            type="submit"
                            label="Login"
                            value="Login"
                        > Login
                            </Button>
            {/* <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <FormControl>
                  <Input
                    label="Email"
                    type="email"
                    id="email"
                    label="Email"
                    value={email}
                    required
                    onChange={e => onChange(e)}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <LockIcon />
              </Grid>
              <Grid item>
                <FormControl>
                  <Input
                    style={{ marginTop: "10px" }}
                    label="Password"
                    type="password"
                    onChange={e => onChange(e)}
                    value={password}
                  />
                </FormControl>

              </Grid>

            </Grid>
            <Button
              style={{ marginTop: "50px" }}
              variant="contained"
              color="primary"
              type="submit"
              label="Sign In"
              value="login"
            >
              Sign In
                </Button> */}
          </form>
          <p className="">
            Do not have an account? <Link to="/register">Sign Up</Link>
          </p>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
Login.propTypes = {
  login: PropTypes.func.isRequired,
}
export default connect(null, { login })(Login);