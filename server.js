// Dependencies
var express = require("express");
var path = require("path");

// Create express server and port
var app = express();
var PORT = process.env.PORT || 8080;

// Middleware for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/app'));

// Routes
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});