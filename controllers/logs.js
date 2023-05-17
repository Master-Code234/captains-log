const express = require("express");

const router = express.Router();

const Logs = require("../models/log");

router.get("/", (req, res) => {
  Logs.find({}, (error, allLogs) => {
    res.render("../views/Index", {
      log: allLogs,
    });
  });
});

router.get("/new", (req, res) => {
  res.render("../views/New");
});

router.delete("/:id", (req, res) => {
  Logs.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/logs");
  });
});

router.put("/:id", (req, res) => {
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

router.post("/", (req, res) => {
  if (req.body.shipIsBroken === "on") {
    req.body.shipIsBroken = true;
  } else {
    req.body.shipIsBroken = false;
  }
  Logs.create(req.body, (error, createdLog) => {
    res.redirect("/logs");
  });
});

router.get("/:id/edit", (req, res) => {
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

router.get("/:id", (req, res) => {
  Logs.findById(req.params.id, (err, foundLog) => {
    console.log(req.params.id);
    res.render("Show", {
      logs: foundLog,
    });
  });
});

module.exports = router;
