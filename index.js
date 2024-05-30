const express = require("express");
const db = require("./config/database");
const personRoutes = require("./routes/personRoutes");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.use("/person", personRoutes);

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
