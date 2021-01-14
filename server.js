var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT||3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Necessary if you want to seperate your front-end html and js files
app.use(express.static("public"))

// Listen on port 3000
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

//Routes
app.get("/", function(req,res) {
    res.sendFile(path.join(_dirname,"home"))
});

app.get("/reserve", function(req,res) {
    res.sendFile(path.join(_dirname,"reserve"))
});

app.get("/tables", function(req,res) {
    res.sendFile(path.join(_dirname,"tables"))
});

