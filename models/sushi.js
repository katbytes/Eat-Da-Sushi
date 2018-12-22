var orm = require("../config/orm.js");

var sushi = {
  all: function(cb) {
    orm.all("sushis", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("sushis", [
      "sushi_name", "devoured"
    ], [
      name, false
    ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("sushis", {
      devoured: true
    }, condition, cb);
  }
};

module.exports = sushi;
