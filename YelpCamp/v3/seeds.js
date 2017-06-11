var mongoose   = require("mongoose"),
    Campground = require("./models/campground");

var data = [
  {
    name: "Cloud's Rest",
    image: "https://farm3.staticflickr.com/2238/1514148183_092606ba94.jpg",
    description: "Ahoy, rough landlubber. go to isla de muerta."
  }
];

function seedDB () {
  // Remove all campgrounds
  Campground.remove({}, function(err) {
    if (err) {
      console.log(err);
    }
    console.log("removed campgrounds!");
  });

  // Add a few campgrounds

  // Add a few comments
}

module.exports = seedDB;