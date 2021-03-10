const Bar = require("../models/barModel");

module.exports = {
  newBar: async (req, res) => {
    console.log("got new ones?");
    try {
      const newBar = new Bar({
        name: req.body.barName,
      });

      const successSave = await newBar.save();
      res.json(successSave);
    } catch (err) {
      res.status(400).send({ msg: "not found" });
    }
  },
  getBars: async (req, res) => {
    console.log("Gettem");

    try {
      const allBars = await Bar.find({});
      res.json({ msg: "finding bars" });
    } catch (err) {
      console.log("Can't catch them all", err);
      res.send("couldn't catchem all", err);
    }
  },
};
