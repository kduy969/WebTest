/**
 * Created by kduyi on 21-May-18.
 */
var express = require('express');
var formidable = require('formidable');
var router = express.Router();
var multer = require('multer');
var fs = require('fs');
var path = require('path');

router.post('/', function (req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        if(files.filetoupload.size === 0){
            res.sendFile('errorUpload.html', { root: path.join(__dirname, '../public') });
            //res.render("error");
        }
        else {
            var oldpath = files.filetoupload.path;
            var newpath = __dirname + '/../public/' + files.filetoupload.name;
            var fileName = files.filetoupload.name;

            fs.readFile(oldpath, function (err, data) {
                if (err) throw err;
                console.log('File read!');

                // Write the file
                fs.writeFile(newpath, data, function (err) {
                    if (err) throw err;

                    let address =req.connection.remoteAddress;
                    let port= req.connection.remotePort;
                    let href = req.protocol+"://"+req.headers.host+"/"+fileName;
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write('<span style="font-size:50px">File path is </span> <a style="font-size: 50px" href="' + href + '">here</a>');
                    res.end();
                    console.log('File written!');
                });

                // Delete the file
                fs.unlink(oldpath, function (err) {
                    if (err) throw err;
                    console.log('File deleted!');
                });
            });
        }
    });

})

module.exports = router;
