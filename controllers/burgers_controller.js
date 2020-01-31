const express = require('express');

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.all(function(data) {
        res.render("index", { cats: data });
    });
});

router.post("/api/burgers", (req, res) => {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(results) {
        res.json({ id: results.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    const condition = `id = ${req.params.id}`;

    burger.update({
        devoured: req.body.devoured
    }, condition, function(results) {
        if (results.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// delete function could go here for a true CRUD app

module.exports = router;