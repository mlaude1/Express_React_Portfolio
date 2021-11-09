/////////////////////////////////
// dependencies
/////////////////////////////////
const express = require("express")
const cors = require("cors");

// Import JSON files
const projects = require("./projects.json");
const about = require("./about.json");


/////////////////////////////////
// Application Object
/////////////////////////////////
const app = express()

/////////////////////////////////
// MIDDLEWARE 
/////////////////////////////////
app.use(cors());
app.use(express.json()) // parse json bodies, and make req.body

//home route for testing our app
app.get("/", (req, res) => {
  res.send("Hello World");
});

// route for retrieving projects
app.get("/projects", (req, res) => {
  // send projects via JSON
  res.json(projects);
});

// route for retrieving about info
app.get("/about", (req, res) => {
  // send projects via JSON
  res.json(about);
});


////////////////////////////////////
//declare a variable for our port number
const PORT = process.env.PORT || 4000;
// turn on the server listener
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));