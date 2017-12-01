var Campground = require("../models/campground");
var Comment    = require("../models/comment");


// all the middleware goes here
var middlewareObj = {};

middlewareObj.checkCampgroundOwnership = function(req, res, next) {
  // Is user logged in?
  if (req.isAuthenticated()) {
    Campground.findById(req.params.id, function(err, foundCampground) {
      if (err) {
        res.redirect("back");
      } else {
        // Does user own the campground
        if (foundCampground.author.id.equals(req.user._id)) {
          next();
        } else {
          res.redirect("back");
          console.log("You do not have permission to edit that");
        }
      }
    });
  } else {
    console.log("You need to be logged in to do that");
    res.redirect("back");
  }
};

middlewareObj.checkCommentOwnership = function(req, res, next) {
  // Is user logged in?
  if (req.isAuthenticated()) {
    Comment.findById(req.params.comment_id, function(err, foundComment) {
      if (err) {
        res.redirect("back");
      } else {
        // Does user own the comment
        if (foundComment.author.id.equals(req.user._id)) {
          next();
        } else {
          res.redirect("back");
          console.log("You do not have permission to edit that");
        }
      }
    });
  } else {
    console.log("You need to be logged in to do that");
    res.redirect("back");
  }
};

// Middleware to see if user is logged in
middlewareObj.isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
};

module.exports = middlewareObj;
