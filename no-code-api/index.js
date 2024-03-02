require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("This route works!");
});

const server = app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is listening on : ${process.env.SERVER_PORT}`);
});

module.exports = server;
