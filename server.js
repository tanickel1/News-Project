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

if(process.env.NODE_ENV == 'production'){
    mongoose.connect('mongodb://linkfor heroku app')
}
else {
    mongoose.connect('mongodb://localhost/news-project');
}
var db = mongoose.connection;

db.on('error', function(err){
    console.log('Mongoose Error: ', err);
});

db.once('open', function() {
    console.log('Mongoose Connection Successful.');
})

var note = require('./models/Note.js');
var headline = require('./models/Headline.js');

var router = requre('./controllers/fetch.js');
app.use('/', router);

var port = process.env.PORRT || 3000; 
app.listen(port, function(){
    console.log("Running on port:" + port);
});