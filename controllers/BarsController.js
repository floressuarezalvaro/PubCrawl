const Bar = require("../models/barModel");

module.exports = {
  newBar: async (req, res) => {
    try {
      const newBar = new Bar({
        name: req.body.barName,
      });

      const successSave = await newBar.save();
      res.json(successSave);
    } catch (err) {
      res.send("error saving: ", err);
    }
  },
};
