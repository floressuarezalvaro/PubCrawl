const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const barSchema = new Schema({
  barName: {
    type: String,
    required: true,
  },
  barRating: {
    type: Number,
    required: true,
  },
  barAddress: {
    type: String,
    required: true,
  },
  barCity: {
    type: String,
    required: true,
  },
  barState: {
    type: String,
    required: true,
  },
  barReviewLink: {
    type: String,
    required: false,
  },
  barPhone: {
    type: String,
    required: false,
  },
  barWebsite: {
    type: String,
    required: false,
  },
});

const Bar = mongoose.model("Bar", barSchema);

module.exports = Bar;
