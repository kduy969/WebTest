/**
 * Created by kduyi on 21-May-18.
 */
var express=require('express');
var app=express();
var http=require('http').Server(app);
var ip = require('ip');
var path = require('path');

var cons = require('consolidate');

// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'html');

app.use(express.static('public'));

require("./Controller/controller.js")(app);
const PORT = process.env.PORT || 5000

http.listen(PORT,function(){
    console.log("Node Server is setup and it is listening on http://"+ip.address());
})
