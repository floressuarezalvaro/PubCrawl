const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/PubCrawl");

const barSeed = [
  {
    name: "Alvy's Bar",
    reviewlink: "testing.com",
    street: "100 Street",
    city: "San Fransisco",
    state: "CA",
    zip: "94040",
    overall: "10",
    country: "USA",
    phone: "1111111111",
    url: "Testing.com/review1",
  },
  {
    name: "Nicks's Bar",
    reviewlink: "testing.com",
    street: "100 Street",
    city: "San Fransisco",
    state: "CA",
    zip: "94040",
    overall: "10",
    country: "USA",
    phone: "1111111111",
    url: "Testing.com/review1",
  },
  {
    name: "Eva's Bar",
    reviewlink: "testing.com",
    street: "100 Street",
    city: "San Fransisco",
    state: "CA",
    zip: "94040",
    overall: "10",
    country: "USA",
    phone: "1111111111",
    url: "Testing.com/review1",
  },
  {
    name: "Alfredo's Bar",
    reviewlink: "testing.com",
    street: "100 Street",
    city: "San Fransisco",
    state: "CA",
    zip: "94040",
    overall: "10",
    country: "USA",
    phone: "1111111111",
    url: "Testing.com/review1",
  },
  {
    name: "Bonnies's Bar",
    reviewlink: "testing.com",
    street: "100 Street",
    city: "San Fransisco",
    state: "CA",
    zip: "94040",
    overall: "10",
    country: "USA",
    phone: "1111111111",
    url: "Testing.com/review1",
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
