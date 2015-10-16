'use strict';

var fs = require('fs');

module.exports = {

    api: function api(req, res) {
        res.send("Hello");
    },

    posts: function posts(req, res) {
        var files = fs.readdirSync(process.cwd() + '/content/posts/');

        var arr = [];

        for (var i in files) {
            arr.push(require(process.cwd() + '/content/posts/' + files[i]));
            arr[i].id = files[i];
        }

        arr = arr.sort(function (a, b) {
            return b.date - a.date;
        });
        for (var i in arr) files[i] = arr[i].id;

        res.send(files);
    },

    post: function post(req, res) {
        var file = require(process.cwd() + '/content/posts/' + req.params.id + '.json');
        res.send(file);
    },

    index: function index(req, res) {
        var dir = process.cwd() + '/../client/index.html';
        fs.readFile(dir, 'utf8', function (err, text) {
            res.send(text);
        });
    }
};