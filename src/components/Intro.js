import React from "react";
import { Paper, Typography, Grid } from "@material-ui/core";

const Intro = () => (
  <Paper style={{ padding: 20, marginBottom: 35 }}>
    <Grid container>
      <Grid item md={6}>
        <Typography gutterBottom variant="headline">
          It's just the best place to buy your new Goooood Car.
        </Typography>
        <Typography gutterBottom component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          fuga laborum deserunt ad velit modi ullam maiores laudantium, quas
          ipsum cum blanditiis iure doloribus eaque quis, non porro iusto dicta.
        </Typography>
        <Typography gutterBottom component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          fuga laborum deserunt ad velit modi ullam maiores laudantium, quas
          ipsum cum blanditiis iure doloribus eaque quis, non porro iusto dicta.
        </Typography>
        <Typography gutterBottom component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          fuga laborum deserunt ad velit modi ullam maiores laudantium, quas
          ipsum cum blanditiis iure doloribus eaque quis, non porro iusto dicta.
        </Typography>
      </Grid>
    </Grid>
  </Paper>
);

export default Intro;
