var express = require("express");
var app = express();

// FOR C9.IO
// var port = process.env.PORT;
// var ip = process.env.IP;

app.get("/", function (req, res) {
  res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function (req, res) {

  var sounds = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof Woof!",
    cat: "MEOW",
    horse: "Neigh"
  };
  var animal = req.params.animal.toLowerCase();
  var sound = sounds[animal];

  res.send("The " + animal  + " says " + "'" + sound + "'");
});


app.get("/repeat/:message/:times", function(req, res) {
  var message = req.params.message;
  var times = Number(req.params.times);
  var result = "";

  for (var i = 0; i < times; i++) {
    result += message + " ";
  }
  res.send(result);
});


app.get("*", function(req, res) {
  res.send("Sorry, page not found...What are you doing with your life?");
});


app.listen(3000, function () {
  console.log("Server has started!!!");
});

// FOR C9.IO
// app.listen(process.env.PORT, process.env.IP, function () {
// console.log("Server has started!!!");
// console.log("Hosted on port: " + port);
// console.log("Hosted at IP: " + ip);
// });