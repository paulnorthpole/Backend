var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);


app.get("/", function(req, res) {
  res.render("landing");
});

//INDEX - show all campgrounds
app.get("/campgrounds", function(req, res) {
  // Get all campgrounds from DB
  Campground.find({}, function(err, allCampgrounds) {
    if (err) {
        console.log(err);
    } else {
        res.render("index", {campgrounds: allCampgrounds});
    }
  })
});

//CREATE - add new campground to DB
app.post("/campgrounds", function(req, res) {
  // Get data from from and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var newCampground = {name: name,  image: image, description: desc};
  // Create a new campground and save to DB
  Campground.create(newCampground, function(err, newlyCreated) {
    if (err) {
        console.log(err);
    } else {
        // Redirect back to campgrounds page
        res.redirect("/campgrounds");
    }
  })
});

//NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res) {
  res.render("new");
});

//SHOW - shows more info about one campground
app.get("/campgrounds/:id", function(req, res) {
  //find the campground with the provided ID
  Campground.findById(req.params.id, function(err, foundCampground) {
    if (err) {
        console.log(err);
    } else {
        //Render show template with that campground
        res.render("show", {campground: foundCampground});
    }
  });
});

app.listen(3000, function() {
  console.log("The YelpCamp Server Has Started!");

});

