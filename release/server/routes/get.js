'use strict';

var fs = require('fs');
var _ = require('underscore');

var standardData = {
    title: "Jamahiel - Powerful Code and Efficient Living with Nathan Jamahiel Nelson",
    ogTitle: "Powerful Code and Efficient Living with Nathan Jamahiel Nelson",
    ogSiteName: "Jamahiel",
    ogUrl: "http://www.jamahiel.com",
    ogImage: "http://www.jamahiel.com/public/img/hero-india.jpg",
    ogDescription: "A full-stack developer/designer with a passion for powerful, minimal code and efficient living.",
    ogType: "website"
};

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

    postContent: function postContent(req, res) {
        var file = require(process.cwd() + '/content/posts/' + req.params.id + '.json');

        if (file == undefined) res.render('index', standardData);

        var data = _.clone(standardData);
        data.title = file.title + " | Jamahiel";
        data.ogTitle = file.title;
        data.ogUrl = 'http://www.jamahiel.com/post/' + req.params.id;
        data.ogImage = file.image;
        data.ogDescription = file.summary;
        data.ogType = "article";
        data.response = file;

        res.render('index', data);
    },

    index: function index(req, res) {
        res.render('index', standardData);
    }
};