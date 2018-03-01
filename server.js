var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Setup the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
