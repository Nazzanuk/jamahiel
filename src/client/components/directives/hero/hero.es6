'use strict';

app.directive('hero', (API, Post) => {
    return {
        templateUrl: 'hero.html',
        scope: {
            'postId':'='
        },

        link(scope, element, attrs) {

            var post = {};

            var getPost = () => {
                return post;
            };

            var loadPost = () => {
                return API.getPostById(scope.postId).then((response) => {
                    post = new Post(response);
                });
            };

            var init = () => {
                console.log(scope);
                loadPost();
            };

            init();

            scope.getPost = getPost;
        }
    }
});
