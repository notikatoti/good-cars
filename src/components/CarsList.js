import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from "@material-ui/core";
import { Link } from "react-router-dom";

const CarsList = ({ car }) => {
  return (
    <div>
      <Card>
        <CardMedia style={{ height: 0, paddingTop: "50%" }} image={car.img} />
        <CardContent style={{ borderBottom: "1px solid rgba(0,0,0,.125)" }}>
          <Typography color="textSecondary" gutterBottom>
            {car.price}
          </Typography>
          <Typography
            style={{ textTransform: "uppercase", textDecoration: "none" }}
            gutterBottom
            variant="headline"
          >
            {car.title}
          </Typography>
          <Typography component="p">{car.description}</Typography>
        </CardContent>
        <CardActions>
          <Button
            component={Link}
            to={{
              pathname: `/car-detail/${car.id}`,
              state: { car }
            }}
            size="small"
            color="primary"
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CarsList;
