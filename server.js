var express = require('express'),
    app = express(),
    namespace = require('require-namespace'),
    bodyParser = require('body-parser');

namespace.createSync(__dirname + '/server/controllers/', 'controllers');

var controllers = namespace.controllers;

app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/views/index.html');
});

app.use('/js/', express.static(__dirname + '/client/js/'));

app.post('/api/items', controllers.itemsController.create);

app.listen(3000, function () {
    console.log('I\'m listening');
});