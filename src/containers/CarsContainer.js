import React, { Component } from "react";
import { Grid, Typography } from "@material-ui/core";
import CarsList from "../components/CarsList";
import Intro from "../components/Intro";

const CARS = [
  {
    id: 1,
    title: "2019 Kia Soul",
    price: "$22,990",
    brand: "Kia",
    model: "Soul",
    year: 2019,
    vin: "KNDJP3A53K7636224",
    color: "Red",
    img:
      "http://newtrucknews.com/wp-content/uploads/2018/02/Kia-Soul-956x584.jpg",
    description:
      "The Kia Soul is a front-engine, front-wheel-drive, five-door subcompact crossover SUV (Mini MPV) manufactured and marketed worldwide by Kia and now in its third generation",
    rating: [{ goodCars: 4.3 }, { owners: 4.3 }],
    reviews: [
      {
        id: 1,
        author: "Mike Baker",
        title: "Very fair and honest,a pleasure doing business with them",
        review:
          "Seriously the quickest, easiest car purchase I’ve ever made. Kevin Bailey was incredible. Thank you! I highly recommend coming here for your next vehicle.",
        rating: 4.3,
        date: "15.02.2019"
      },
      {
        id: 2,
        author: "Jeff Celie",
        title: "Second Vehicle I have Bought From Concord Card",
        review:
          "This is the second time I have bought a vehicle from Concord Cars, specifically from Joe. I haven't had a bad experience yet and Joe is always very forthcoming with information on the vehicle and its history.",
        rating: 4.4,
        date: "22.01.2019"
      }
    ]
  },
  {
    id: 2,
    title: "Hyundai Tucson 2018",
    price: "$24,750",
    brand: "Hyundai",
    model: "Tucson",
    year: 2018,
    vin: "KM8J3CA48JU669296",
    color: "Blue",
    img:
      "https://pictures.dealer.com/w/westendhyundaitc/0434/2e218deb79545ab4cf18161548cf1f9fx.jpg",
    description:
      "The Hyundai Tucson is a compact crossover SUV produced by the South Korean manufacturer Hyundai since 2004. In the brand's lineup, the Tucson fits below the Santa Fe and Veracruz. It is named after the city of Tucson, Arizona",
    rating: [{ goodCars: 4 }, { owners: 4.1 }],
    reviews: [
      {
        id: 1,
        author: "Kevin Bailey",
        title: "Frequent flyer, third time buyer",
        review:
          "Wonderful experience, Josh made us feel very comfortable. He was very informative, knowledgeable and professional as were the other Sales Reps who were present that day. I highly recommend Concord Cars.",
        rating: 4.3,
        date: "15.03.2019"
      },
      {
        id: 2,
        author: "Jacob Maldonado",
        title: "Second Vehicle I have Bought From Concord Card",
        review:
          "This is the second time I have bought a vehicle from Concord Cars, specifically from Joe. I haven't had a bad experience yet and Joe is always very forthcoming with information on the vehicle and its history.",
        rating: 4.4,
        date: "03.07.2018"
      },
      {
        id: 3,
        author: "JimCarter",
        title: "Third Car I have Bought From Concord Cars",
        review:
          "This is the third time I have bought a car at Concord Cars and I have never had a disappointing experience. I first made contact with Terry Lapierre about four months ago. Due to some personal circumstances I ended up not buying.",
        rating: 5,
        date: "03.10.2018"
      }
    ]
  },
  {
    id: 3,
    title: "Jeep Wrangler 2014",
    price: "$34,995",
    brand: "Jeep",
    model: "Wrangler",
    year: "2014",
    vin: "1C4HJWFG5EL296758",
    color: "White",
    img:
      "https://photos7.motorcar.com/used-2014-jeep-wrangler-4wd2drsport-10793-16894515-1-1024.jpg",
    description:
      "The Jeep Wrangler is a series of compact and mid-size (Wrangler Unlimited and Wrangler 2-door JL) four-wheel drive off-road SUVs, manufactured by Jeep since 1986, and currently in its fourth generation. The Wrangler JL, the most recent generation, was unveiled in late 2017 and is produced at Jeep's Toledo Complex",
    rating: [{ goodCars: 4.2 }, { owners: 4.6 }],
    reviews: [
      {
        id: 1,
        author: "Josh Borden",
        title: "Amazingly smooth transaction",
        review:
          "Seriously the quickest, easiest car purchase I’ve ever made. Kevin Bailey was incredible. Thank you! I highly recommend coming here for your next vehicle.",
        rating: 4.3,
        date: "15.03.2017"
      },
      {
        id: 2,
        author: "Joe Lint",
        title: "Liked these guys so much I came back here to buy my Jeep",
        review:
          "This is the second time I have bought a vehicle from Concord Cars, specifically from Joe. I haven't had a bad experience yet and Joe is always very forthcoming with information on the vehicle and its history.",
        rating: 4.4,
        date: "03.07.2018"
      }
    ]
  }
];

class CarsContainer extends Component {
  state = {
    cars: CARS
  };

  render() {
    return (
      <div style={{ padding: 24 }}>
        <Intro />
        <Typography variant="headline" style={{ marginBottom: 15 }}>
          All vehicles in our directory
        </Typography>
        <Grid container spacing={24}>
          {this.state.cars.map(car => {
            return (
              <Grid key={car.id} item xs={12} sm={6} lg={4} xl={3}>
                <CarsList car={car} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default CarsContainer;
