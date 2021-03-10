const router = require("express").Router();
const barsController = require("../controllers/BarsController");

// router.post("/", newBar);
router.route("/getbars").get(barsController.getBars);

module.exports = router;
