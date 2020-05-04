import React, { Fragment } from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faSignInAlt,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { makeStyles } from "@material-ui/core/styles";

const useStylesNavbar = makeStyles({
  root: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontFamily: "Helvetica",
    fontWeight: 500,
    marginRight: "20px",
    fontSize: "16px",
  },
  icon: {
    marginRight: "5px",
  },
});

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const classes = useStylesNavbar();

  const authLinks = (
    <div>
      <Link className={classes.link} to="/dashboard">
        <Button className={classes.link}>DASHBOARD</Button>
      </Link>
      <Button
        className={classes.link}
        color="inherit"
        onClick={logout}
        href="#!"
      >
        <FontAwesomeIcon className={classes.icon} icon={faSignOutAlt} /> Log out
      </Button>
    </div>
  );

  const guestLinks = (
    <ul className={classes.list}>
      <Link className={classes.link} to="/register">
        <FontAwesomeIcon className={classes.icon} icon={faUserPlus} />
        REGISTER
      </Link>
      <Link className={classes.link} to="/login">
        <FontAwesomeIcon className={classes.icon} icon={faSignInAlt} />
        LOGIN
      </Link>
    </ul>
  );
  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <Typography variant="h6" color="inherit">
          Sustanable METRO
        </Typography>

        {!loading && (
          <Fragment> {isAuthenticated ? authLinks : guestLinks} </Fragment>
        )}
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProp = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProp, { logout })(Navbar);
