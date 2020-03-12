import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <AppBar>
    <Toolbar variant="dense">
      <Typography variant="h6" color="inherit">
        Sustanable METRO
      </Typography>
      <Link to="/register">
        Register
      </Link>
      <Link to="/login">
        Login
      </Link>
    </Toolbar>
  </AppBar>
  )
};

export default Navbar;
