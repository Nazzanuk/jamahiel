'use strict';

app.directive('hero', (API, Post, $timeout) => {
    return {
        templateUrl: 'hero.html',
        scope: {
            'postId':'=',
            'post':'='
        },

        link(scope, element, attrs) {

            var post = {};
            scope.ready = false;

            var getPost = () => {
                return post;
            };

            var loadPost = () => {
                return API.getPostById(scope.postId).then((response) => {
                    post = new Post(response);
                    $timeout(() => scope.ready = true, _.random(500));

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
