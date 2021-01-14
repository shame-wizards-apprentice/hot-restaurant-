var express = require("express");
const { networkInterfaces } = require("os");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Necessary if you want to seperate your front-end html and js files
app.use(express.static("public"));

// Creates new guest objects
const NewRes = function (name, phone, email, id) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.id = id;
};

const WaitList = function (name, phone, email, id) {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.id = id;
};

const reservations = [
    new NewRes("Aang", 555 - 555 - 5555, "aang@fake.com", 3),

    new NewRes("Sokka", 222 - 222 - 2222, "sokka@fake.com", 5)
]

const wait = [
    new WaitList("Katara", 333 - 333 - 3333, "katara@fake.com", 16),

    new WaitList("Zuko", 444 - 444 - 4444, "zuko@fake.com", 9)
]

// Listen on port 3000
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

//Routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public/home.html"))

});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "public/reserve.html"))
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "public/tables.html"));

});

app.get("/api/reserve", function(req,res) {
    return res.json(reservations);
})

app.get("/api/reserve/", function(req,res){
    return res.json(wait);
})

