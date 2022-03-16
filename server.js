const express = require("express");
const db = require("./db");
const Note = require("./models/noteModel")
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is up!");
});

app.get("/getnotes", (req, res) => {
  Note.find({}, (error, result) => {
    try {
      res.send(result);
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is up in port: ${port}`);
});
