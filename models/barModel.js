const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const barSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  reviewlink: {
    type: String,
    required: false,
  },
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
  overall: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
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
