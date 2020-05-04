import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import Button from "@material-ui/core/Button";
import { Paper, Container, Grid, FormControl } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";

const useStylesLogin = makeStyles({
  root: {
    flexGrow: 1,
    margin: "auto",
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
    flexDirection: "column",
  },
  link: {
    color: "blue",
    textDecoration: "none",
  },
});

const Login = ({ login, isAuthenticated }) => {
  const classes = useStylesLogin();
  //useState hook
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };
  //redirect to dashboard if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <React.Fragment>
      <Container className={classes.root} maxWidth="sm">
        <Paper className={classes.paper}>
          <form className={classes.form} onSubmit={(e) => onSubmit(e)}>
            <FormControl>
              <Input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
              />
            </FormControl>
            <FormControl>
              <Input
                type="password"
                placeholder="Password"
                name="password"
                minLength="6"
                value={password}
                onChange={(e) => onChange(e)}
              />
            </FormControl>
            <Button
              variant="contained"
              style={{ marginTop: "50px" }}
              color="primary"
              type="submit"
              label="Login"
              value="Login"
            >
              {" "}
              Login
            </Button>
          </form>
          <p className="">
            Do not have an account?{" "}
            <Link className={classes.link} to="/register">
              Sign Up
            </Link>
          </p>
        </Paper>
      </Container>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
export default connect(mapStateToProps, { login })(Login);
