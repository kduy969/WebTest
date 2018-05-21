/**
 * Created by kduyi on 21-May-18.
 */
var path = require('path');

module.exports = function (app){
    app.use('/',require('../route/root'));
    app.use('/fileupload',require('../route/fileUpload'));

    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

// error handler
    app.use(function(err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });

}
