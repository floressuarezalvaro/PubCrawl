const router = require("express").Router();

const { localBars } = require("../controllers/BeerController");

router.put("/", localBars);

module.exports = router;
