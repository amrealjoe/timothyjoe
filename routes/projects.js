var express = require("express");
var router = express.Router();

/** GET project page */
router.get("projects", (req, res, next) => {
  res.render("projects", { title: "Projects" });
});

module.exports = router;
