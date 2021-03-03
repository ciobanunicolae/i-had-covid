//Requirements
const express = require("express");
const mongoose = require("mongoose");
//Routes
const routes = require("./routes/api");

//App config
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/db", routes);

//Mongo config
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Listener
app.listen(PORT, console.log(`Server started on port ${PORT}`));