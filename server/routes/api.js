const express = require("express");
const router = express.Router();

//Model
const Entry = require("../models/Entry");

//Routes
//Default page
router.get("/", (req, res) => {
    Entry.find({})
        .then(data => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch(err => {
            console.log(err);
        })
})

//Adding a new entry
router.post("/save", (req, res)=> {
    const data = req.body;
    const newEntry = new Entry(data);
    newEntry.save(err => {
        if (err) {
            res.status(500).json({ msg: "Server error" });
        }
        res.status(200).json({ msg: "Server succes" });

    })
})

///Export
module.exports = router;