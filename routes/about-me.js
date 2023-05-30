const express = require("express");
const router = express.Router();

/** GET the about-me page */
router.get("about-me", function (req, res, next) {
  res.render("about-me", { siteTitle: "About Me" });
});

module.exports = router;
