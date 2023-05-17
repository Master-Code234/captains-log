const express = require("express");

const app = express();

const methodOverride = require("method-override");

const port = 3000;
const mongoose = require("mongoose");

// Add dotnv
require("dotenv").config();

// mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// Middleware

app.use(methodOverride("_method"));

app.use((req, res, next) => {
  next();
});

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

// Data

const Logs = require("./models/log");

// Routes

app.get("/", (req, res) => {
  res.send(`<h1> Welcome to the captains log app! </h1>`);
});

app.get("/logs", (req, res) => {
  Logs.find({}, (error, allLogs) => {
    res.render("../views/Index", {
      log: allLogs,
    });
  });
});

app.get("/logs/new", (req, res) => {
  res.render("../views/New");
});

app.post("/logs", (req, res) => {
  if (req.body.checked === "on") {
    req.body.checked = true;
  } else {
    req.body.checked = false;
  }
  Logs.create(req.body, (error, createdLog) => {
    res.redirect("/logs");
  });
});

app.get("/logs/:id", (req, res) => {
  Logs.findById(req.params.id, (err, foundLog) => {
    res.render(`../views/Show`, {
      logs: foundLog,
    });
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

