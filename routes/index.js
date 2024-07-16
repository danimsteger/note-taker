// Sets up Modular Routing system

// Requires express
const router = require("express").Router();

// imports notes router
const notesRouter = require("./notes");

router.use("/notes", notesRouter);

module.exports = router;
