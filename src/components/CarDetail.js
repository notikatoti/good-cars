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
  Button
} from "@material-ui/core";
import { Link } from "react-router-dom";

const CarDetail = ({
  location: {
    state: { car }
  }
}) => {
  return (
    <div style={{ padding: 24 }}>
      <Button
        component={Link}
        to="/"
        style={{ marginBottom: 35 }}
        color="primary"
        variant="outlined"
      >
        To Home Page
      </Button>
      <Paper style={{ marginBottom: 35 }}>
        <Typography
          style={{ textTransform: "uppercase", padding: 20 }}
          variant="h5"
        >
          {car.title}
        </Typography>
        <Typography
          style={{ borderTop: "1px solid rgba(0,0,0,.125)", padding: 20 }}
          component="p"
        >
          <Typography style={{ fontWeight: "bold" }} variant="overline">
            Goooood Cars rating:{" "}
            <Typography inline variant="overline">
              {car.rating[0].goodCars}/5
            </Typography>
          </Typography>
          <Typography style={{ fontWeight: "bold" }} variant="overline">
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
                  <TableCell style={{ textTransform: "uppercase" }}>
                    {car.brand}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head" component="th">
                    Model
                  </TableCell>
                  <TableCell style={{ textTransform: "uppercase" }}>
                    {car.model}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head" component="th">
                    Color
                  </TableCell>
                  <TableCell style={{ textTransform: "uppercase" }}>
                    {car.color}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head" component="th">
                    Year
                  </TableCell>
                  <TableCell style={{ textTransform: "uppercase" }}>
                    {car.year}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head" component="th">
                    VIN
                  </TableCell>
                  <TableCell style={{ textTransform: "uppercase" }}>
                    {car.vin}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell variant="head" component="th">
                    Price
                  </TableCell>
                  <TableCell style={{ textTransform: "uppercase" }}>
                    {car.price}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} lg={4} xl={3}>
          <Paper>
            <div
              style={{
                borderBottom: "1px solid rgba(0,0,0,.125)",
                padding: 20
              }}
            >
              <Typography
                style={{ textTransform: "uppercase" }}
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
            <div style={{ padding: 20 }}>
              <Typography
                style={{ textTransform: "uppercase" }}
                variant="h5"
                component="h3"
                gutterBottom
              >
                Reviews
              </Typography>
              {car.reviews.map(review => {
                return (
                  <div
                    style={{
                      paddingBottom: 10
                    }}
                    key={review.id}
                  >
                    <Typography variant="button" gutterBottom>
                      "{review.title}"
                    </Typography>
                    <Typography gutterBottom>{review.review}</Typography>
                    <Typography style={{ textAlign: "right" }} gutterBottom>
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
            <div
              style={{
                borderBottom: "1px solid rgba(0,0,0,.125)",
                padding: 20
              }}
            >
              <Typography
                style={{ textTransform: "uppercase" }}
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

export default CarDetail;
