const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const barSchema = new Schema({
  barName: {
    type: String,
    required: true,
  },
});

module.exports = Bar = mongoose.model("bar", barSchema);
