import React, { useState } from "react";
import {
  FormControl,
  Input,
  Container,
  Paper,
  Button,
  FormHelperText,
  ButtonBase,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";

const useStylesRegister = makeStyles({
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
    minWidth: 600,
    marginTop: "0.3rem",
    color: "#888",
  },
  link: {
    color: "blue",
    textDecoration: "none",
  },
});

const Register = ({ setAlert, register, isAuthenticated }) => {
  const classes = useStylesRegister();
  //useState hook
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  //distracture data from formdata
  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    //check if password match
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };
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
                type="text"
                placeholder="Name"
                name="name"
                required
                value={name}
                onChange={(e) => onChange(e)}
              />
            </FormControl>
            <FormControl>
              <Input
                type="email"
                placeholder="Email Address"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
              />
              <FormHelperText>Your company email</FormHelperText>
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
            <FormControl className="">
              <Input
                type="password"
                placeholder="Confirm Password"
                name="password2"
                minLength="6"
                value={password2}
                onChange={(e) => onChange(e)}
              />
            </FormControl>
            <Button
              variant="contained"
              style={{ marginTop: "50px" }}
              color="primary"
              type="submit"
              label="Register"
              value="Register"
            >
              {" "}
              Register
            </Button>
          </form>
          <p className="">
            Already have an account?{" "}
            <Link className={classes.link} to="/login">
              Sign In
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
Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
export default connect(mapStateToProps, { setAlert, register })(Register);
