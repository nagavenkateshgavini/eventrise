const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const router = require("./routes/routes");
const services = require("./services/services");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", router);

app.listen(3001, () => {
  console.log("Server started at port 3001");
});

exports = module.exports = app;
