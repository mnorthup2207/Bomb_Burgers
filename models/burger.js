// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    // burger.all(cb) pushed from burgersController.js
  all: function(cb) {
      // orm.all(tableName, cb)
    orm.all("burgers", function(res) {
      cb(res); // takes in data array from mysql and passes through to the orm
    });
  },
  // The variables cols and vals are arrays.
  // burger.create(["burger_name", "devoured"], ["Blue Ranch", "1"], cb)
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
