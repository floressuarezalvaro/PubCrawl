const mongoose = require("mongoose");

const barSchema = new mongoose.Schema({
  barName: {
    type: String,
    required: true,
  },
});

module.exports = Bar = mongoose.model("bar", barSchema);
