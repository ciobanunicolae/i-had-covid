const express = require("express");
const router = express.Router();

//Model
const Entry = require("../models/Entry");

//Routes
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

router.post("/save", (req, res)=> {
    const data = req.body;
    const newEntry = 
})



///Export
module.exports = router;