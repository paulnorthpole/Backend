var mongoose = require("mongoose"),
    Comment  = require("./models/comment");
  Campground = require("./models/campground");

var data = [
  {
    name:        "Cloud's Rest",
    image:       "https://farm3.staticflickr.com/2238/1514148183_092606ba94.jpg",
    description: "Ahoy, rough landlubber. go to isla de muerta."
  },
  {
    name:        "Desert Mesa",
    image:       "https://farm3.staticflickr.com/2789/4176189296_c51043f23b.jpg",
    description: "Futile ionic cannons lead to the sonic shower."
  },
  {
    name:        "Roster's Roost",
    image:       "https://farm4.staticflickr.com/3464/3712326558_5a25585fe3.jpg",
    description: "A shining form of grace is the reincarnation."
  }
];

function seedDB () {
  // Remove all campgrounds
  Campground.remove({}, function(err) {
    if (err) {
      console.log(err);
    }
    console.log("removed campgrounds!");
    // Add a few campgrounds
    data.forEach(function(seed) {
      Campground.create(seed, function(err, campground) {
        if (err) {
          console.log(err);
        } else {
          console.log("added a campground");
          //create a comment
          Comment.create(
            {
              text:   "This place is great, but I wish there was internet",
              author: "Homer"
            }, function(err, comment) {
              if (err) {
                console.log(err);
              } else {
                campground.comments.push(comment);
                campground.save();
                console.log("Created new comment");
              }
            });
        }
      });
    });
  });

  // Add a few comments
}

module.exports = seedDB;