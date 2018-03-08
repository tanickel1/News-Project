//dependencies
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = requre('body-parser');
var mongoose = require('mongoose');

var logger = require('morgan');
var request = require('request');
var cheerio = require('cheerio');

//initalize express
var app = express();
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
extended: false
}))

app.use(express.static(process.cwd() +'/public'));

//handlebars
app.engine('handlebars', exphbs({defaulLayout: "main"}));
app.set('view engine', 'handlebars');

