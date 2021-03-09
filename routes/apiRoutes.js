const router = require("express").Router();
const { newBar, getBars } = require("../controllers/BarsController");

router.post("/", newBar);
router.get("/", getBars);

module.exports = router;
