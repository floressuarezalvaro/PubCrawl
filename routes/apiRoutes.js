const router = require("express").Router();
const { newBar } = require("../controllers/BarsController");

router.post("/", newBar);
// router.get("/testNew", newBar);

module.exports = router;
