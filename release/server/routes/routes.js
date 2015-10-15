'use strict';

var fs = require('fs');

var GET = require('./get');
var POST = require('./post');

module.exports = {
    init: function init(app) {
        app.get('/api/', GET.index);
        app.get('/api/posts/', GET.posts);
        app.get('/api/posts/id/:id', GET.post);
        app.get('*', function (req, res) {
            console.log(__dirname);
            console.log(process.cwd());
            fs.readFile(process.cwd() + '/../client/index.html', 'utf8', function (err, text) {
                console.log(process.cwd() + '/../client/index.html', text);
                res.send(text);
            });
        });
        //app.get('/api/groups/', GET.groups);
        //app.get('/api/groups/_id/:_id', GET.groups);
        //app.get('/api/login/', GET.login);
    }
};