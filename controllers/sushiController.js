var express = require("express");

var router = express.Router();
var sushi = require("../models/sushi.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/sushis");
});

router.get("/sushis", function(req, res) {
  // express callback response by calling sushi.selectAllsushi
  sushi.all(function(sushiData) {
    // wrapper for orm.js that using MySQL query callback will return sushi_data, render to index with handlebar
    res.render("index", { sushi_data: sushiData });
  });
});

// post route -> back to index
router.post("/sushis/create", function(req, res) {
  // takes the request object using it as input for sushi.addsushi
  sushi.create(req.body.sushi_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/sushis/:id", function(req, res) {
  sushi.update(req.params.id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    // Send back response and let page reload from .then in Ajax
    res.sendStatus(200);
  });
});

module.exports = router;
