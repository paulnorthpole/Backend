var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function (req, res) {
  res.send("Hi there!");
});

// "/bye" => "Goodbye!";
app.get("/bye", function (req, res) {
  res.send("Goodbye");
});

// "/dog" => "MEOW!";
app.get("/dog", function (req, res) {
  console.log("Someone made a request to /dog");
  res.send("MEOW");
});

app.get("/r/:subredditName", function (req, res) { // : is the wildcard
  var subreddit = req.params.subredditName;
  res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
});

app.get("/r/:subreddit/comments/:id/:title/", function(req, res) {
  console.log(req.params);
  res.send("you made it to the title");
});

app.get("*", function(req, res) {
  res.send("You are a star!!!");
});

// Tell Express to listen for requests (start server)

app.listen(process.env.PORT, process.env.IP, function () {
  console.log("Server has started!!!");
});

// * is the route matcher
// : can define patterns