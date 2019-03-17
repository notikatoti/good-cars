import React from "react";
import { Grid, Typography, withStyles } from "@material-ui/core";

const styles = {
  main: {
    padding: 24
  },
  container: {
    marginTop: 100
  },
  info: {
    textAlign: "center",
    marginTop: 20
  },
  name: {
    textTransform: "uppercase"
  }
};

const Information = props => {
  const { classes } = props;

  return (
    <div className={classes.main}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={24}
        className={classes.container}
      >
        <img
          src="https://www.integraconference.info/wp-content/uploads/2018/03/placeholder-face-big.png"
          alt="Developer Pic"
          height="130"
        />

        <Grid item className={classes.info}>
          <Typography className={classes.name} variant="h5">
            Anton Anoshko
          </Typography>
          <Typography gutterBottom variant="overline">
            Junior JavaScript Developer
          </Typography>
          <Typography variant="subtitle1">anoshkoltd@gmail.com</Typography>
          <Typography variant="subtitle1">+380732037625</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(Information);
