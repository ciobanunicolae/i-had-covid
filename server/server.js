//Requirements
const express = require("express");
const mongoose = require("mongoose");
const path = require('path');

//Routes
const routes = require("./routes/api");

//Atlas uri 
require('dotenv').config()
const uri = process.env.ATLAS_URI;

//App config
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/db", routes);

//Mongo config
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

//Listener
app.listen(PORT, console.log(`Server running on port ${PORT}`));