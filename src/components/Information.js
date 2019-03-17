import React from "react";
import { Grid, Typography } from "@material-ui/core";

const Information = () => (
  <div style={{ padding: 24 }}>
    <Grid
      style={{ marginTop: 100 }}
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={24}
    >
      <img
        src="https://www.integraconference.info/wp-content/uploads/2018/03/placeholder-face-big.png"
        alt="Developer Pic"
        height="130"
      />

      <Grid item style={{ textAlign: "center", marginTop: 20 }}>
        <Typography style={{ textTransform: "uppercase" }} variant="h5">
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

export default Information;
