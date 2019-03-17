import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  withStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = {
  image: {
    height: 0,
    paddingTop: "50%"
  },
  content: {
    borderBottom: "1px solid rgba(0,0,0,.125)"
  },
  title: {
    textTransform: "uppercase",
    textDecoration: "none"
  }
};

const CarsList = ({ car, ...props }) => {
  const { classes } = props;

  return (
    <div>
      <Card>
        <CardMedia className={classes.image} image={car.img} />
        <CardContent className={classes.content}>
          <Typography color="textSecondary" gutterBottom>
            {car.price}
          </Typography>
          <Typography className={classes.title} gutterBottom variant="headline">
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

export default withStyles(styles)(CarsList);
