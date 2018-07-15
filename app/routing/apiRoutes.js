
var friends = require('../data/friends');
var fs = require('fs');

module.exports = function(app) {

    app.get('/api/friends', function(request, response) {
        response.json(friends);
    })

    app.post('/api/friends', function(request, response) {

        var userData = request.body;
        console.log(userData);
        var bestScore = 9999;
        var matchIndex = -1;

        for (var i = 0; i < friends.length; i++) {
            var tempScore = 0;
            for (var j = 0; i < userData.length; j++) {
                tempScore += Math.abs( userData.answers[j] - friends[i].answers[j] );
            }
            if (tempScore < bestScore) {
                bestScore = tempScore;
                matchIndex = i;
            }   
        }
        var match = {
            name: friends[matchIndex].name,
            photo: friends[matchIndex].photo
        }    
        response.json(match);

        friends.push(userData);
        fs.writeFile('./app/data/friends.js', `module.exports = ${JSON.stringify(friends)}`, function(err) {
            if (err) throw err;
        });

    });

};