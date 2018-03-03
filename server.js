var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Setup the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/routing'));

// Router
// Links to the route files
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Start the server
app.listen(PORT, function() {
  console.log("Friend listening on PORT: " + PORT);
});
