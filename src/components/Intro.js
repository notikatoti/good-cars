import React from "react";
import { Paper, Typography, Grid, withStyles } from "@material-ui/core";

const styles = {
  intro: {
    padding: 20,
    marginBottom: 35
  }
};

const Intro = props => {
  const { classes } = props;

  return (
    <Paper className={classes.intro}>
      <Grid container>
        <Grid item md={6}>
          <Typography gutterBottom variant="headline">
            It's just the best place to find a Goooood Car that is right for
            you.
          </Typography>
          <Typography gutterBottom component="p">
            On our site you can pick up a car to your liking, read the reviews
            about cars. We have to look at.
          </Typography>
          <Typography gutterBottom component="p">
            We know all about cars!
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default withStyles(styles)(Intro);
