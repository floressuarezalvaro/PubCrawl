const router = require("express").Router();
const auth = require("../middleware/auth");
const { newBar, getBars } = require("../controllers/BarsController");

router.post("/newbar", newBar);
router.get("/getbars", getBars);

module.exports = router;
