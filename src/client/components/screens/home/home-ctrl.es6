app.controller('HomeCtrl', ($element, $timeout, API, $scope) => {

    var posts = [];

    var getPosts = () => {
        return posts;
    };

    var loadPosts = () => {
        return API.getPosts().then((response) => {
            posts = response;
            $element.find('[screen]').addClass('active');
        });
    };

    var init = () => {
        loadPosts();

    };

    init();

    $scope.getPosts = getPosts;
});



