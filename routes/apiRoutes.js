const router = require("express").Router();
const auth = require("../middleware/auth");
const {
  newBar,
  getBars,
  deleteBars,
  updateBars,
} = require("../controllers/BarsController");

router.post("/newbar", newBar);
router.get("/getbars", getBars);
router.delete("/deletebars/:id", deleteBars);
router.put("/updatebars/:id", updateBars);

module.exports = router;
