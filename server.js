
require('dotenv').config();
var express = require('express');
var cors = require('cors');
var bparse = require('body-parser');

var port = process.env.PORT;
var app = express();

app.use(bparse.urlencoded({ extended: true }));
app.use(bparse.text());
app.use(bparse.json());
app.use(cors());

require('./app/routing/htmlRoutes')(app);

require('./app/routing/apiRoutes')(app);

app.listen(port, function() {
    console.log(`Connection on port: ${port}`);
});