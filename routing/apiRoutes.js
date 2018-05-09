let bestFriendArray = require("../app/data/friends.js");
let path = require("path");
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
        //Find the minimum difference between the user and the friends
         let lowestFriend = {};
         let total = 0;
         for (let i = 0; i < newArray.length; i++) {
            total = total + newArray[i];
        }
        //loop through bestFriendArray
        for (let j = 0; j < bestFriendArray.length; j++) {
            let friendTotal = 0;
            for (let i = 0; i < bestFriendArray[j].scores.length; i++) {
                friendTotal = friendTotal + bestFriendArray[j].scores[i];
            }
            //Compare total w/friend total
            let diff = Math.abs(total - friendTotal);
            if (lowestFriend && lowestFriend.diff) {
                if (friendTotal < lowestFriend.diff) {
                    lowestFriend = {};
                    lowestFriend.diff = diff;
                    lowestFriend.name = bestFriendArray[j].name;
                    lowestFriend.photo = bestFriendArray[j].photo;
                }
            } else {
                lowestFriend.diff = diff;
                lowestFriend.name = bestFriendArray[j].name;
                lowestFriend.photo = bestFriendArray[j].photo;
            }
        }
        console.log(lowestFriend);
        //res.sendFile(path.join(__dirname, "../public/results.html"));
        res.send(`Your closest match is ${lowestFriend.name} \n \n <img src="${lowestFriend.photo}"> Your difference is ${lowestFriend.diff}`);
    });

};