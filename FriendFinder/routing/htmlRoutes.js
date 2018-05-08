var path = require("path");

//GET Requests...this code will handle when a user visits the home page and the survey page

module.exports = function(app) {

    app.get("/", function (req, res) {
        console.log(path.join(__dirname, "../public/home.html"));
        //res.sendFile(path.join(__dirname, "../public/home.html"));

    });
};


app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));

});

//Route Default: which will take the user back to home if  the user happens to make a incorrect request

app.get(function(req, res) {
    res.sendFile(path.join(__dirname, "/..public/home.html"));

});
