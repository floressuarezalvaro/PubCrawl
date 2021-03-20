const router = require("express").Router();
const auth = require("../middleware/auth");
const {
  newBar,
  getBars,
  deleteBars,
} = require("../controllers/BarsController");

router.post("/newbar", newBar);
router.get("/getbars", getBars);
router.delete("/deletebars/:id", deleteBars);

module.exports = router;
