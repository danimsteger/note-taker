// import necessary modules and middleware
const express = require("express");
const path = require("path");
const { check } = require("./middleware/check");
const api = require("./routes/index");

// establish port
const PORT = process.env.port || 3001;
const app = express();

// import custom middleware
app.use(check);

// middleware to parse JSON data and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

app.use(express.static("public"));

// get route for homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// get route for notes page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// wildcard route to go back to homepage
app.get("/*", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
