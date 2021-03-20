const db = require("../models");

module.exports = {
  newBar: function (req, res) {
    db.Bar.create(req.body)
      .then((dbmodel) => res.json(dbmodel))
      .catch((err) => res.status(422).json(err));
  },
  getBars: function (req, res) {
    db.Bar.find({}, (err, found) => {
      if (err) {
        console.log(err);
      } else {
        res.json(found);
      }
    });
  },
  deleteBars: function (req, res) {
    db.Bar.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
