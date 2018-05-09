var bestFriendData = require("../data/friends.js");
var path = require("path");
newArray = [];

//Export API Routes
module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        console.log("This is apiRoutes.js");
        res.json(bestFriendData);
    });
    app.post("/api/survey", function (req, res) {
        console.log(req.body.question1);
        newArray.push(Number(req.body.question1));
        newArray.push(Number(req.body.question2));
        newArray.push(Number(req.body.question3));
        newArray.push(Number(req.body.question4));
        newArray.push(Number(req.body.question5));
        newArray.push(Number(req.body.question6));
        newArray.push(Number(req.body.question7));
        newArray.push(Number(req.body.question8));
        newArray.push(Number(req.body.question9));
        newArray.push(Number(req.body.question10));
        console.log(newArray);
    });

    // var userResponse = req.body.scores;
    // console.log(`${userResponse}`);

    //Looks at best friend match
    var bestFriendMatch = "";
    var bestFriendImage = "";
    var TotalDifference = 0;

    //For loop to loop over the friend data
    
};