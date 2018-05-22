/**
 * Created by kduyi on 21-May-18.
 */
var express = require('express');
var router = express.Router();
var path = require('path');


router.get('/',function(req,res){
    //res.sendFile(path.resolve(__dirname+"/../views/index.html"));
    /*res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<label style="padding:5px;border: 3px solid red; background:red;color:white" for="files" class="btn">Upload</label>');
    res.write('<input id="files" style="visibility:hidden;border-style: solid;border-width: 5px;" text="UPLOAD" type="file" accept="*!/!*" name="filetoupload"><br>');
    res.write('<input style="margin-top: 10px" type="submit">');
    res.write('</form>');*/s
    res.sendFile('index.html', { root: path.join(__dirname, '../public') });
    //res.sendFile(path.resolve(__dirname+"/public/index.html"));
    //res.sendfile("../public/index.html")
    return res.end();
});

module.exports = router;