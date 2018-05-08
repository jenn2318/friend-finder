var bestFriendData = require("../data/friends.js");
var path = require("path");


//Export API Routes
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        console.log("This is apiRoutes.js");
        res.json(bestFriendData);
    });
};


app.post("/api/friends", function (req, res) {
    console.log(bestFriendData);
}






// var userResponse = req.body.scores;
// console.log(`${userResponse}`);

//Looks at best friend match
var bestFriendMatch = "";
var bestFriendImage = "";
var TotalDifference = 0;

//For loop to loop over the friend data
for (var i = 0; i < bestFriendData.length; i++) {
    console.log("bestFriend = " + JSON.stringify(bestFriend[i]));
}