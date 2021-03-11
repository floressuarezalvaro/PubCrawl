const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/PubCrawl");

const userSeed = [
  {
    email: "alfredo@test.com",
    password: "password",
    passwordCheck: "password",
    displayName: "SCRUM",
  },
  {
    email: "alvaro@test.com",
    password: "password",
    passwordCheck: "password",
    displayName: "BACKEND GURU",
  },
  {
    email: "bonnie@test.com",
    password: "password",
    passwordCheck: "password",
    displayName: "BONBON",
  },
  {
    email: "eva@test.com",
    password: "password",
    passwordCheck: "password",
    displayName: "ELPHINHOTE",
  },
  {
    email: "nick@test.com",
    password: "password",
    passwordCheck: "password",
    displayName: "NICO",
  },
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then((data) => {
    console.log(data.result.n + " users inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
