app.controller('HomeCtrl', ($element, $timeout, API, $scope) => {

    var posts = [];
    $scope.ready = false;

    var getPosts = () => {
        return posts;
    };

    var loadPosts = () => {
        return API.getPosts().then((response) => {
            posts = response;
            $scope.ready = true;
        });
    };

    var init = () => {
        $timeout(() => $element.find('[screen]').addClass('active'), 50);
        loadPosts();

    };

    init();

    $scope.getPosts = getPosts;
});



