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

// Routes

app.get("/", (req, res) => {
  res.send(`<h1> Welcome to the captains log app! </h1>`);
});

app.get("/logs", (req, res) => {
  res.render(`../views/Index`);
});

app.get("/logs/new", (req, res) => {
  res.render("../views/New");
});

app.post("/logs", (req, res) => {
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
