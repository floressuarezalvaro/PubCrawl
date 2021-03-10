const db = require("../models");

module.exports = {
  // newBar: async (req, res) => {
  //   console.log("got new ones?");
  //   try {
  //     const newBar = new Bar({
  //       name: req.body.barName,
  //     });

  //     const successSave = await newBar.save();
  //     res.json(successSave);
  //   } catch (err) {
  //     res.status(400).send({ msg: "not found" });
  //   }
  // },
  getBars: function (req, res) {
    db.Bar.find({}, (err, found) => {
      if (err) {
        console.log(err);
      } else {
        res.json(found);
      }
    });
    // .then((dbModel) => res.json(dbModel))
    // .catch((err) => res.status(422).json(err));
    // try {
    //   const allBars = await Bar.find({});
    //   res.json({ msg: "finding bars" });
    // } catch (err) {
    //   console.log("Can't catch them all", err);
    //   res.send("couldn't catchem all", err);
    // }
  },
};
