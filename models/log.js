const mongoose = require("mongoose");

const logsSchema = new mongoose.Schema({
  title: { type: String },
  entry: { type: String },
  shipIsBroken: Boolean,
});

const logs = mongoose.model("logs", logsSchema);

module.exports = logs;
