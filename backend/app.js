const express = require("express");
const app = express();
require("./database/db");
require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Server is Start ");
});

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Port connected on ${PORT}`);
    });
  } catch (error) {
    console.log("please check connections", error);
  }
};

start();
