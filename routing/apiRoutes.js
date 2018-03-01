// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

//////////////////////
/////ROUTING/////////
/////////////////////

module.exports = function(app){
// Get routes for api/friends
app.get("/api/friends", function(req, res) {
res.sendFile(path.join(__dirname, "../app/friends.js"));))
});

// Post routes /api/friends that will handle income survey results.
}
