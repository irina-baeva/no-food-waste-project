import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {

  const authLinks = (
    <li>
      <a onClick={logout} href="#!">
        <FontAwesomeIcon icon={faUser} /> Log out
        </a>
    </li>
  )
  const guestLinks = (
    <ul>
      <li>
        <Link to="/register">
          Register
    </Link>
      </li>
      <li>
        <Link to="/login">
          Login
        </Link>
      </li>
    </ul>
  )
  return (
    <AppBar>
      <Typography variant="h6" color="inherit">
        Sustanable METRO
    </Typography>
  {!loading && (<Toolbar variant="dense"> {isAuthenticated ? authLinks : guestLinks} </Toolbar>)}
    </AppBar>
  )
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProp = state => ({
  auth: state.auth
})

export default connect(mapStateToProp, { logout })(Navbar);
