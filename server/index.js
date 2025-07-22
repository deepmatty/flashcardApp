const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = require("./models");

//Routes
const flashcardRouter = require("./routes/Cards");
app.use("/cards", flashcardRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
