const express = require("express");

const app = express();

const db = require("./models");

//Routes
const flashcardRouter = require("./routes/Cards");
app.use("/cards", flashcardRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
