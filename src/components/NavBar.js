import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  withStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = {
  flexGrow: {
    flexGrow: 1
  },
  textDecorationNone: {
    textDecoration: "none"
  }
};

const NavBar = props => {
  const { classes } = props;

  return (
    <div className={classes.flexGrow}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            className={`${classes.flexGrow} ${classes.textDecorationNone}`}
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

export default withStyles(styles)(NavBar);
