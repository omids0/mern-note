const mongoose = require("mongoose");

const mongooseUrl = "mongodb://localhost:27017/mern-note";

mongoose.connect(mongooseUrl, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo DB Connection Successful.");
});

db.on("error", () => {
  console.log("Mongo DB Connection Failed.");
});

module.exports = mongoose;
