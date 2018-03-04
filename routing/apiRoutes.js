// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
var friendsArray = require("./app/friends.js");

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

for (var i = 0; i < friendsArray.length; i++) {
// Set the difference in scores back to 0 everytime this loops.
difference = 0;
console.log("Friend Name: " + friendsArray[i].name);
for (var j = 0; j < friendsArray[i].scores.length; j++) {
// Calculate the differences in scores.
difference += Math.abs(parseInt(userScores[j]) - parseInt(friendsArray[i].scores[j]));
if (difference < friendMatch.scoreDifference) {
  friendMatch.name = friendsArray[i].name;
  friendMatch.photo = friendsArray[i].photo;
  friendMatch.scoreDifference = difference;
  console.log("Your Match: " + perfectFriend.name);
}
}
console.log("Difference in Score: " + difference);
}
// Push to the the friends.js
friendsArray.push(user);
// Push to the html page
res.json(friendMatch);
});
}
