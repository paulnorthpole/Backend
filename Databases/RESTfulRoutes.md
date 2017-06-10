#RESTful Routing

##Introduction
* Define REST and explain WHY it matters
* List all 7 RESTful routes
* Show example of RESTful routing in practice

REST - a mapping between HTTP routes and CRUD

Name|Route
:---|:---
Create|/
Read|/allBlogs
Update|/updateBlog/:id
Destroy|/destroyBlog/:id

<!-- ![Alt text](Routes.png?raw=true "Title") -->





RESTFULL ROUTES

Name|Path|HTTP Verb|Purpose|Mongoose Method
:---|:---|:---|:---|:---|
INDEX|/dogs|GET| Display a list of all dog|Dog.find()|
NEW|/dogs/new|GET|Displays from to make a new dog|N/A|
CREATE|/dogs|POST|Add new dog to DB|Dog.create()|
SHOW|/dogs/:id|GET|Shows info about one dog|Dog.findById()|
EDIT|/dogs/:id/edit|GET|Shows edit form for one dog|Dog.findById()|
UPDATE|/dogs/:id|PUT|Update a particular dog, then redirect somewhere|Dog.findByIdAndUpdate()|
DESTROY|/dogs/:id|DELETE|Delete a particular dog, then redirect somewhere|Dog.findByIdAndRemove|
