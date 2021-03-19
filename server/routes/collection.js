const { Router } = require("express");
const fs = require("fs");
const path = require("path");
const urlsJsonFilePath = path.join(__dirname, "../collection.js");

const collection = Router();

collection.get("/", (req, res) => {
  fs.readFile(urlsJsonFilePath, "utf8", (err, data) => {
    const parsedData = JSON.parse(data);
  });
  res.send("collection route");
});

module.exports = collection;
