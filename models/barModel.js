const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const barSchema = new Schema({
  name: {
    type: String,
    required: false,
  },
  reviewlink: {
    type: String,
    required: false,
  },
  street: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  state: {
    type: String,
    required: false,
  },
  zip: {
    type: String,
    required: false,
  },
  overall: {
    type: Number,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  url: {
    type: String,
    required: false,
  },
});

const Bar = mongoose.model("Bar", barSchema);

module.exports = Bar;
