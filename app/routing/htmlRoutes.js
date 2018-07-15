
var path = require('path');

module.exports = function(app) {

    app.get('/', function(request, response) {
        response.sendFile(path.resolve('./app/public/home.html'));
    });

    app.get('/survey', function(request, response) {
        response.sendFile(path.resolve('./app/public/survey.html'));
    });

}