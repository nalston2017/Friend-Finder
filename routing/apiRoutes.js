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
app.post("/api/friends", function(req, res){
  var perfectFriend = {
    name: "".
    photo: "".
    scoreDifference: 200
  }

var user = req.body;
var userPhoto = req.body.photo;
var userName = req.body.name;
var userScores = req.body.scores;

console.log(user);

var difference = ;

for (var i = 0; i < path.length; i++) {
// Set the difference in scores back to 0 everytime this loops.
difference = 0;
console.log("Friend Name: " + path[i].name);
for (var j = 0; j < path[i].scores.length; j++) {
// Calculate the differences in scores.
difference += Math.abs(parseInt(userScores[j]) - parseInt(path[i].scores[j]));
if (difference < friendMatch.scoreDifference) {
  friendMatch.name = path[i].name;
  friendMatch.photo = path[i].photo;
  friendMatch.scoreDifference = difference;
  console.log("Your Match: " + perfectFriend.name);
}
}
console.log("Difference in Score: " + difference);
}
// Push to the the friends.js
path.push(user);
// Push to the html page
res.json(friendMatch);
});
}
