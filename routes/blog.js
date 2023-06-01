const express = require("express");
const router = express.Router();

/** GET the about-me page */
router.get("/", function (req, res, next) {
  res.render("blog", { siteTitle: "Blog" });
});

module.exports = router;
