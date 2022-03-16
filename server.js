const express = require("express");
const db = require("./db");
const Note = require("./models/noteModel")
const notesRout = require("./routes/notesRoute")
const app = express();

app.use(express.json());
app.use('/api/notes/', notesRout)

app.get("/", (req, res) => {
  res.send("Server is up!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is up in port: ${port}`);
});
