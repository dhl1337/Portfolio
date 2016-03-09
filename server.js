/**
 * Created by danle on 3/7/16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));


var port = 80;
app.listen(port, function() {
    console.log('Listening on port ' + port);
});