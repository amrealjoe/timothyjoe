var express = require("express");
var router = express.Router();

/** GET project page */
router.get("project", (req, res, next) => {
  res.render("project", { siteTitle: "Projects" });
});

module.exports = router;
