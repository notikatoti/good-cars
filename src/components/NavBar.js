import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            style={{ textDecoration: "none", flexGrow: "1" }}
            component={Link}
            to="/"
            variant="title"
            color="inherit"
          >
            Goooood Cars
          </Typography>
          <Button component={Link} to="/" color="inherit">
            Cars
          </Button>
          <Button component={Link} to="/information" color="inherit">
            Information
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
