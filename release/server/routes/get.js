'use strict';

var fs = require('fs');

module.exports = {

    index: function index(req, res) {
        res.send("Hello");
    },

    posts: function posts(req, res) {
        var files = fs.readdirSync(process.cwd() + '/content/posts/');
        console.dir(files);
        //var file = require(`${process.cwd()}/content/posts/${req.params.id}.json`);

        res.send(files);
    },

    post: function post(req, res) {
        var file = require(process.cwd() + '/content/posts/' + req.params.id + '.json');
        res.send(file);
    }
};