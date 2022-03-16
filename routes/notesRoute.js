const express = require("express");
const router = express.Router();
const Notes = require("../models/noteModel");

router.get("/getallnotes", async (req, res) => {
  try {
    const notes = await Notes.find({});
    res.send(notes);
  } catch (error) {
    return res.status(404).json({ error });
  }
});

router.post("/addnewnote", async (req, res) => {
  const newNote = req.body.note;
  try {
    const note = new Notes({
      title: newNote.title,
      body: newNote.body,
    });
    await note.save();
    res.send();
  } catch (error) {
    return res.status(404).json({ error });
  }
});

module.exports = router;
