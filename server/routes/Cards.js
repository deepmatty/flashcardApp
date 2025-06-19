const express = require("express");
const router = express.Router();
const { Cards } = require("../models");

router.get("/", (req, res) => {
  res.send("Hello world");
});

router.post("/", (req, res) => {
  const card = req.body;
  Cards.create(card);
});

module.exports = router;
