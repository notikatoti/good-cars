import React from "react";
import {
  Typography,
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableRow,
  CardMedia,
  Button,
  withStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = {
  main: {
    padding: 24
  },
  title: {
    marginBottom: 35
  },
  home: {
    marginBottom: 15
  },
  review: {
    paddingBottom: 10
  },
  uppercase: {
    textTransform: "uppercase"
  },
  padding: {
    padding: 20
  },
  bold: {
    fontWeight: "bold"
  },
  borderBottom: {
    borderBottom: "1px solid rgba(0,0,0,.125)"
  },
  textAlignRight: {
    textAlign: "right",
    fontStyle: "italic"
  },
  lastChild: {
    "&:last-child": {
      paddingBottom: 0
    }
  }
};

const CarDetail = ({
  location: {
    state: { car }
  },
  ...props
}) => {
  const { classes } = props;

  return (
    <div className={classes.main}>
      <Button
        component={Link}
        to="/"
        className={classes.home}
        color="primary"
        variant="outlined"
      >
        To Home Page
      </Button>
      <Paper className={classes.title}>
        <Typography
          className={`${classes.uppercase} ${classes.padding} ${
            classes.borderBottom
          }`}
          variant="h5"
        >
          {car.title}
        </Typography>
        <Typography className={classes.padding} component="p">
          <Typography className={classes.bold} variant="overline">
            Goooood Cars rating:{" "}
            <Typography inline variant="overline">
              {car.rating[0].goodCars}/5
            </Typography>
          </Typography>
          <Typography className={classes.bold} variant="overline">
            Owners rating:{" "}
            <Typography inline variant="overline">
              {car.rating[1].owners}/5
            </Typography>
          </Typography>
        </Typography>
      </Paper>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12} lg={4} xl={3}>
          <Paper>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell variant="head" component="th">
                    Brand
                  </TableCell>
                  <TableCell className={classes.uppercase}>
                    {car.brand}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head" component="th">
                    Model
                  </TableCell>
                  <TableCell className={classes.uppercase}>
                    {car.model}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head" component="th">
                    Color
                  </TableCell>
                  <TableCell className={classes.uppercase}>
                    {car.color}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head" component="th">
                    Year
                  </TableCell>
                  <TableCell className={classes.uppercase}>
                    {car.year}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head" component="th">
                    VIN
                  </TableCell>
                  <TableCell className={classes.uppercase}>{car.vin}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head" component="th">
                    Price
                  </TableCell>
                  <TableCell className={classes.uppercase}>
                    {car.price}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} lg={4} xl={3}>
          <Paper>
            <div className={`${classes.padding} ${classes.borderBottom}`}>
              <Typography
                className={classes.uppercase}
                variant="h5"
                component="h3"
                gutterBottom
              >
                Description
              </Typography>
              <Typography gutterBottom component="p">
                {car.description}
              </Typography>
            </div>
            <div className={classes.padding}>
              <Typography
                className={classes.uppercase}
                variant="h5"
                component="h3"
                gutterBottom
              >
                Reviews
              </Typography>
              {car.reviews.map(review => {
                return (
                  <div
                    className={`${classes.review} ${classes.lastChild}`}
                    key={review.id}
                  >
                    <Typography variant="button" gutterBottom>
                      "{review.title}"
                    </Typography>
                    <Typography gutterBottom>{review.review}</Typography>
                    <Typography className={classes.textAlignRight} gutterBottom>
                      {review.author}
                    </Typography>
                    <Typography color="textSecondary" variant="overline">
                      Owner Rating:{" "}
                      <Typography inline variant="overline">
                        {review.rating}/5
                      </Typography>
                    </Typography>
                    <Typography gutterBottom variant="caption">
                      {review.date}
                    </Typography>
                  </div>
                );
              })}
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} lg={4} xl={6}>
          <Paper>
            <div className={`${classes.padding} ${classes.borderBottom}`}>
              <Typography
                className={classes.uppercase}
                variant="h5"
                component="h3"
                gutterBottom
              >
                Photos
              </Typography>
              <Grid container spacing={8}>
                <Grid item xl={4}>
                  <CardMedia component="img" image={car.img} />
                </Grid>
              </Grid>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default withStyles(styles)(CarDetail);
