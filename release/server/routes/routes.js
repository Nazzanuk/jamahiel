'use strict';

var GET = require('./get');
var POST = require('./post');

module.exports = {
    init: function init(app) {
        app.get('/api/', GET.api);

        app.get('/api/posts/', GET.posts);
        app.get('/api/posts/id/:id', GET.post);

        app.get('/post/:id', GET.postContent);

        app.get('*', GET.index);
    }
};