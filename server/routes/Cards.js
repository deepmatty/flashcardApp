const express = require("express");
const router = express.Router();
const { Cards } = require("../models");

router.get("/", (req, res) => {
  res.send("Hello world");
});

router.post("/", async (req, res) => {
  const card = req.body;
  await Cards.create(card);
  res.json(card);
});

module.exports = router;
