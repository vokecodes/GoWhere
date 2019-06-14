const express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  port = 3000;

app.listen(port, () => console.log(`GoWhere app is listening at ${port}`));
