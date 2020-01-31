const orm = require("../config/orm.js");

const burger = {

    // cat.all(cb) pulled from burgers_controller.js
    all: function(cb) {
        //orm.all(tableName, cb)
        orm.all("burgers", function(res){
            cb(res);
        });
    },
    // cat.create(["name", "devoured"], ["Blue Ribbon Burger", "1"], cb)
    create: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
                cd(res);
        });
    },

    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res)
        });
    }

    // possibly put a delete here for a true CRUD file
};

module.exports = burger;