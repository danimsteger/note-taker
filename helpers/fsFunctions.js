const fs = require("fs");
const util = require("util");

// The following code was adopted from Module 11 mini-project (Activity 28) and modified

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);

// Writes to file as string
const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err
      ? console.error(err)
      : console.info(`\nNew note written to ${destination}`)
  );

// reads from file and parses, then writes file again with new content
const readAndAppend = (content, file) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

// deletes a note by reading the file, finding the note with the id and filtering it out and rewriting the file
const deleteNote = (noteId, filePath) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const notes = JSON.parse(data);
      const updatedNotes = notes.filter((note) => note.id !== noteId);
      writeToFile(filePath, updatedNotes);
    }
  });
};

module.exports = { readFromFile, writeToFile, readAndAppend, deleteNote };
