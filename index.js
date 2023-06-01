// ./index.js
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var app = express();
const { v4 } = require("uuid");
const port = process.env.PORT || 5000;

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//Routes
const Index = require("./routes/index");
const About = require("./routes/about")
const Project = require("./routes/projects")
const Blog = require("./routes/blog")
const Error = require("./routes/error")

//Handlers
app.use("/", Index);
app.use("/about", About);
app.use("/projects", Project);
app.use("/blog", Blog);

// catch 404 and forward to error handler
app.use(function (req, res, next) {next(createError(404));});
// error handler
app.use(Error);

app.listen(port, () => { console.log(`Listening on ${port}`);});

module.exports = app;
