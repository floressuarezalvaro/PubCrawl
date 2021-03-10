const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/PubCrawl");

const barSeed = [
  {
    barName: "Alvy's Bar",
  },
  {
    barName: "Freddie's Bar",
  },
  {
    barName: "Eva's Bar",
  },
  {
    barName: "Bonnie's Bar",
  },
  {
    barName: "Nick's Bar",
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
