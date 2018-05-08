//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Let's node know this will be an Express app
var app = express();

//Used to set the Port
var PORT = process.env.PORT || 3000;

//This is Middleware for Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extented: true}));


//ROUTING files, tells the server what should be done when the requests are made
require("./routing/htmlRoutes.js")(app);
require("./routing/apiRoutes.js")(app);

//Port Listening
app.listen(PORT, function() {
    console.log("App listening on PORT:" + PORT);

});