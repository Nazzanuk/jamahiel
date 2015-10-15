'use strict';

var fs = require('fs')

module.exports = {

    index(req, res) {
        res.send("Hello");
    },

    posts(req, res) {
        var files = fs.readdirSync(`${process.cwd()}/content/posts/`)
        console.dir(files)
        //var file = require(`${process.cwd()}/content/posts/${req.params.id}.json`);

            res.send(files);


    },

    post(req, res) {
        var file = require(`${process.cwd()}/content/posts/${req.params.id}.json`);
        res.send(file);
    }
};

