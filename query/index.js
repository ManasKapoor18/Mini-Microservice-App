const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {});
app.post("/events", (req, res) => {});

const PORT = 4002;
app.listen(PORT, () => {
  console.log(`listening at ${PORT}`);
});
