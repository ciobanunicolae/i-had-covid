const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema
const EntrySchema = new Schema({
    mail: String,
    region: String,
    country: String,
    age: Number,
    date: {
        type: String,
        default: Date.now()
    }
})

//Model
const Entry = mongoose.model("entry", EntrySchema);

module.exports = Entry;
