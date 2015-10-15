app.controller('PostCtrl', ($element, $timeout, API, $scope, Post, $stateParams) => {

    var post = {};

    var getPost = () => {
        return post;
    };

    var getId = () => {
        return $stateParams.id;
    };

    var loadPost = () => {
        return API.getPostById($stateParams.id).then((response) => {
            post = new Post(response);
            $element.find('[screen]').addClass('active');
        });
    };

    var init = () => {
        console.log($stateParams);
        loadPost();
    };

    init();

    $scope.getPost = getPost;
    $scope.getId = getId;
});



