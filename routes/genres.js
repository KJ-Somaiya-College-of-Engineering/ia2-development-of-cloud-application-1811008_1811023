const cors = require("cors");
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const genreController = require("../controller/genre");

const app = express();

//To prevent CORS errors
app.use(cors());

//Connecting mongoDB
const databaseConfig = require("../config/keys");
console.log(databaseConfig);
mongoose.connect(databaseConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Checking the connection to db
var db = mongoose.connection;
db.once("open", () => console.log("Mongo Database is connected now!"));
db.on("error", console.error.bind(console, "connection error:"));

app.use(express.static("./uploads"));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(bodyParser.json({ limit: "10mb" }));

//Serve our static asset
app.use(express.static("frontend/build"));

//Handling all the incoming requests
app.get("/api/genres", genreController.GET_ALL_GENRES);

// const port = 5000;
// console.log(port);
// app.listen(port, () => console.log(`Server running on port ${port}`));
module.exports = app;