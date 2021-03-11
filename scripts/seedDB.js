const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/PubCrawl");

const barSeed = [
  {
    barName: "Alvy's Bar",
    barRating: "10",
    barAddress: "100 Street",
    barCity: "San Fransisco",
    barState: "California",
    barReviewLink: "Testing.com/review1",
    barPhone: "1111111111",
    barWebsite: "testing.com",
  },
  {
    barName: "Freddie's Bar",
    barRating: "10",
    barAddress: "100 Street",
    barCity: "San Fransisco",
    barState: "California",
    barReviewLink: "Testing.com/review1",
    barPhone: "1111111111",
    barWebsite: "testing.com",
  },
  {
    barName: "Eva's Bar",
    barRating: "10",
    barAddress: "100 Street",
    barCity: "San Fransisco",
    barState: "California",
    barReviewLink: "Testing.com/review1",
    barPhone: "1111111111",
    barWebsite: "testing.com",
  },
  {
    barName: "Bonnie's Bar",
    barRating: "10",
    barAddress: "100 Street",
    barCity: "San Fransisco",
    barState: "California",
    barReviewLink: "Testing.com/review1",
    barPhone: "1111111111",
    barWebsite: "testing.com",
  },
  {
    barName: "Nick's Bar",
    barRating: "10",
    barAddress: "100 Street",
    barCity: "San Fransisco",
    barState: "California",
    barReviewLink: "Testing.com/review1",
    barPhone: "1111111111",
    barWebsite: "testing.com",
  },
];

db.Bar.remove({})
  .then(() => db.Bar.collection.insertMany(barSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
