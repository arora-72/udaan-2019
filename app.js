var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var indexRouter = require("./routes/index");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
require("dotenv").config();
app.use("/", indexRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useFindAndModify: false },
  err => {
    if (!err) console.log("Connection successful");
    if (err) console.log(err);
  }
);

app.use(function(err, req, res, next) {
  res.json({ message: "error" });
});

module.exports = app;
