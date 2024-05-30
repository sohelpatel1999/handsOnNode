const mongoose = require("mongoose");

const mongourl = "mongodb://localhost:27017/shop";

mongoose.connect(mongourl);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("connected to mongo db");
});
db.on("disconnect", () => {
  console.log("connected to mongo db");
});
db.on("error", () => {
  console.log("connected to mongo db");
});

module.exports = db;
