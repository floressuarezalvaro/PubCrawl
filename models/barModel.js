const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const barSchema = new Schema({
  barName: {
    type: String,
    required: true,
  },
});

const Bar = mongoose.model("Bar", barSchema);

module.exports = Bar;
