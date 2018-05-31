/**
 * Created by kduyi on 31-May-18.
 */
var express = require('express');
var formidable = require('formidable');
var router = express.Router();
var multer = require('multer');
var fs = require('fs');
var path = require('path');

router.post('/', function (req, res) {
    //let name = req.body.name;
    console.log(req.body);
    res.send(req.body)
});

module.exports = router;