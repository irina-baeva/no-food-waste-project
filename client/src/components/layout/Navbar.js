import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
const Navbar = () => {
  return (
    <AppBar>
    <Toolbar variant="dense">
      <Typography variant="h6" color="inherit">
        Sustanable METRO
      </Typography>
    </Toolbar>
  </AppBar>
  )
};

export default Navbar;
