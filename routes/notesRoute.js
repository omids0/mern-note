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

router.post("/removenote", async (req, res) => {
  const noteId = req.body.id;
  try {
    const removenote = await Notes.findByIdAndRemove({ _id: noteId });
    res.send();
  } catch (error) {
    return res.status(404).json({ error });
  }
});

router.post("/findnote", async (req, res) => {
  const noteId = req.body.id;
  try {
    const findNote = await Notes.findById({ _id: noteId });
    res.send(findNote);
  } catch (error) {
    return res.status(404).json({ error });
  }
});

router.post("/updatenote", async (req, res) => {
  const noteId = req.body.id;
  const updateNote = req.body.updateNote;
  try {
    const update = await Notes.findByIdAndUpdate(noteId, updateNote);
    res.send(update);
  } catch (error) {
    return res.status(404).json({ error });
  }
});

module.exports = router;
