const express = require("express");

const app = express();

const methodOverride = require("method-override");

const port = 3000;
const mongoose = require("mongoose");

const logsController = require("./controllers/logs");


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


app.use("/logs", logsController);


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

