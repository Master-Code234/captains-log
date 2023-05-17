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

app.delete("/logs/:id", (req, res) => {
  Logs.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/logs");
  });
});


app.put("/logs/:id", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  Logs.findByIdAndUpdate(req.params.id, req.body, (err, updatedLog) => {
    console.log(updatedLog);
    res.redirect(`/logs/${req.params.id}`);
  });
});

app.post("/logs", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  Logs.create(req.body, (error, createdLog) => {
    res.redirect("/logs");
  });
});


app.get("/logs/:id/edit", (req, res) => {
  Logs.findById(req.params.id, (err, foundLog) => {
    //find the logs
    if (!err) {
      res.render("../views/Edit", {
        logs: foundLog,
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});


app.get("/logs/:id", (req, res) => {
  Logs.findById(req.params.id, (err, foundLog) => {
  console.log(req.params.id);
    res.render("Show", {
      logs: foundLog,

    });
  });
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

