const router = require("express").Router();
const barsController = require("../controllers/BarsController");

router.route("/newbar").post(barsController.newBar);
router.route("/getbars").get(barsController.getBars);

module.exports = router;
