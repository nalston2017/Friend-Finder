// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

//////////////////////
/////ROUTING/////////
/////////////////////

module.exports = function(app){
// Get routes for survey and a route to home.html
// GET request that displays survey page.
res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// Default is home
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../publichome.html"));
});

// Error 404 routes
app.get('*', function(req, res) {
  return res.status(404).end();
});
