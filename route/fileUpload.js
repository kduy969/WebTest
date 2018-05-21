/**
 * Created by kduyi on 21-May-18.
 */
var express = require('express');
var formidable = require('formidable');
var router = express.Router();
var multer = require('multer');
var fs = require('fs');

var uploading = multer({
    dest: __dirname + '../public/uploads/',
})

router.post('/', function (req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload.path;
        var newpath = __dirname+'/../public/' + files.filetoupload.name;
        var fileName=  files.filetoupload.name;

        fs.readFile(oldpath, function (err, data) {
            if (err) throw err;
            console.log('File read!');

            // Write the file
            fs.writeFile(newpath, data, function (err) {
                if (err) throw err;
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('File path is <a href="' + fileName + '">here</a>');
                res.end();
                console.log('File written!');
            });

            // Delete the file
            fs.unlink(oldpath, function (err) {
                if (err) throw err;
                console.log('File deleted!');
            });
        });

       /* fs.rename(oldpath, newpath, function (err) {
            //if (err) throw err;
            if(err){
                res.send(err.toString());
            }
            else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('File path is:<a href="' + newpath + '">link text</a>');
                res.end();
            }
        });*/
    });
})

module.exports = router;
