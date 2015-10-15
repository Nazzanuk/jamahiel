'use strict';

app.directive('preview', (API, Post) => {
    return {
        templateUrl: 'preview.html',
        scope: {
            reverse:'=',
            'postId':'='
        },

        link(scope, element, attrs) {

            var post = {};

            var getReverseClass = () => {
                return scope.reverse ? 'reverse' : '';
            };

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

            scope.getReverseClass = getReverseClass;
            scope.getPost = getPost;
        }
    }
});
