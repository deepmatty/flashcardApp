const express = require("express");
const router = express.Router();
const { Cards } = require("../models");

router.get("/", async (req, res) => {
  const listOfCards = await Cards.findAll();
  res.json(listOfCards);
});

router.post("/", async (req, res) => {
  const card = req.body;
  await Cards.create(card);
  res.json(card);
});

module.exports = router;
