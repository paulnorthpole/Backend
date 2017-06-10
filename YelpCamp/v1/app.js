var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
  {name: "Salmon Creek", image: "https://farm8.staticflickr.com/7465/16128876859_88ed775d0a.jpg"},
  {name: "Granite Hill", image: "https://farm3.staticflickr.com/2353/2069978635_2eb8b33cd4.jpg"},
  {name: "Mountain Goat's Rest", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
  {name: "Salmon Creek", image: "https://farm8.staticflickr.com/7465/16128876859_88ed775d0a.jpg"},
  {name: "Granite Hill", image: "https://farm3.staticflickr.com/2353/2069978635_2eb8b33cd4.jpg"},
  {name: "Mountain Goat's Rest", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
  {name: "Salmon Creek", image: "https://farm8.staticflickr.com/7465/16128876859_88ed775d0a.jpg"},
  {name: "Granite Hill", image: "https://farm3.staticflickr.com/2353/2069978635_2eb8b33cd4.jpg"},
  {name: "Mountain Goat's Rest", image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"}
];

app.get("/", function(req, res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name,  image: image};
  campgrounds.push(newCampground);
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
  res.render("new");
});

app.listen(3000, function() {
  console.log("The YelpCamp Server Has Started!");

});

