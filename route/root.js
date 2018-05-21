/**
 * Created by kduyi on 21-May-18.
 */
var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/',function(req,res){
    //res.sendFile(path.resolve(__dirname+"/../views/index.html"));
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" accept="*/*" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
});

module.exports = router;