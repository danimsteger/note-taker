const fs = require("fs");
const util = require("util");

// The following code was adopted from Module 11 mini-project (Activity 28) and modified

// Promise version of fs.readFile
const readFromFile = util.promisify(fs.readFile);
