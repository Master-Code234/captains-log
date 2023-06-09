const mongoose = require("mongoose");

const logsSchema = new mongoose.Schema({
  title: { type: String },
  entry: { type: String },
  shipIsBroken: Boolean,
});

const Logs = mongoose.model("Logs", logsSchema);

module.exports = Logs;
