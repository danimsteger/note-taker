const notes = require("express").Router();

// imports node moeule: uuid
const { v4: uuidv4 } = require("uuid");
// imports helper functions from fsFunctions.js
const {
  readAndAppend,
  readFromFile,
  deleteNote,
} = require("../helpers/fsFunctions");

// gets/reads information from db.json and parses it
notes.get("/", (req, res) =>
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)))
);

// posts a new notes
notes.post("/", (req, res) => {
  const { title, text } = req.body;

  // if we have a title and text do the following:
  if (title && text) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    // read the existing db.json file and append newNote to it
    readAndAppend(newNote, "./db/db.json");

    const response = {
      status: "success",
      body: newNote,
    };

    res.json(response);
  } else {
    res.json("Error in posting note");
  }
});

// delete note with a certain id
notes.delete("/:id", (req, res) => {
  const noteId = req.params.id;
  deleteNote(noteId, "./db/db.json");

  res.json({ message: "Note deleted successfully" });
});

module.exports = notes;
