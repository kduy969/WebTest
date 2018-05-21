/**
 * Created by kduyi on 21-May-18.
 */
var express=require('express');
var app=express();
var http=require('http').Server(app);
var ip = require('ip');
app.use(express.static('public'));
require("./Controller/controller.js")(app);
const PORT = process.env.PORT || 5000

http.listen(PORT,function(){
    console.log("Node Server is setup and it is listening on http://"+ip.address());
})
