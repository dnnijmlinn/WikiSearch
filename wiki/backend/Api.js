const express = require("express");
var cors = require("cors");
const { wikisearch } = require("./wikisearch");

const app = express();
app.use(cors());

app.listen(4000, () => {
  console.log("Server running on port 4000");
});

app.get("/hello", (req, res, next) => {
  res.end("Hello world!");
});

app.get("/wiki", (req, res, next) => {
  wikisearch(req.query.haku, (error, data) => {
    if (error) {
      res.end(error);
    } else {
      res.json(data);
    }
  });
});
