var Post     = require("./models/post"),
    User     = require("./models/user"),
    mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");
mongoose.Promise = global.Promise;

Post.create({
  title:   "How to cook the best burger pt. 5",
  content: "ke32 809j kvjk lajk iu e83 jfdfi kfuiudj djdie jdiuiek"
}, function(err, post) {
  User.findOne({email: "bob@gmail.com"}, function(err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      foundUser.posts.push(post);
      foundUser.save(function(err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log(data);
        }
      });
    }
  });
});

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function (err, user) {
//   if (err) {
//       console.log(err);
//   } else {
//     console.log(user);
//   }
// });