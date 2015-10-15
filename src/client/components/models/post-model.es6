'use strict';

app.factory('Post', function ($timeout, $rootScope) {

    class Post {
        constructor(obj) {
            _.forEach(obj, (attr, key) => this[key] = attr)
        }

        getImage() {
            return this.image;
        }

        getTitle() {
            return this.title;
        }

        getSummary() {
            return this.summary;
        }

        getIcon() {
            return this.icon;
        }

        getContent() {
            return this.content;
        }
    }

    return Post;
});
