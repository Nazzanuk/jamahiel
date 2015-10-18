'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var app = angular.module('app', ['ui.router']).run(function () {
    FastClick.attach(document.body);
});

app.directive('ngEnter', function () {
    return function (scope, element, attrs) {
        element.bind('keydown keypress', function (event) {
            if (event.which !== 13) return;
            scope.$apply(function () {
                return scope.$eval(attrs.ngEnter, { $event: event });
            });
            event.preventDefault();
        });
    };
});
'use strict';

app.factory('Post', function ($timeout, $rootScope) {
    var Post = (function () {
        function Post(obj) {
            var _this = this;

            _classCallCheck(this, Post);

            _.forEach(obj, function (attr, key) {
                return _this[key] = attr;
            });
        }

        _createClass(Post, [{
            key: 'getImage',
            value: function getImage() {
                return this.image;
            }
        }, {
            key: 'getTitle',
            value: function getTitle() {
                return this.title;
            }
        }, {
            key: 'getSummary',
            value: function getSummary() {
                return this.summary;
            }
        }, {
            key: 'getIcon',
            value: function getIcon() {
                return this.icon;
            }
        }, {
            key: 'getContent',
            value: function getContent() {
                return this.content;
            }
        }]);

        return Post;
    })();

    return Post;
});

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    var resolve = {
        timeout: function timeout($timeout) {
            $('[screen]').removeClass('active');
            //$('.loading-logo').addClass('active');
            return $timeout(300);
        }
    };

    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise("/");

    // Now set up the states
    $stateProvider.state('home', {
        url: "/",
        templateUrl: "home-screen.html",
        controller: "HomeCtrl",
        resolve: resolve
    }).state('post', {
        url: "/post/:id",
        templateUrl: "post-screen.html",
        controller: "PostCtrl",
        resolve: resolve
    });

    $locationProvider.html5Mode(true);
});
app.controller('ScreenCtrl', function ($element, $timeout, State, $state) {

    var init = function init() {
        $timeout(function () {
            return $element.find('[screen]').addClass('active');
        }, 50);
    };

    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        $(document).scrollTop(0);
    });

    init();
});

'use strict';

app.factory('Alert', function ($timeout, $rootScope) {

    var active = false,
        message = false,
        colour = "primary",
        timeout;

    var showMessage = function showMessage(msg) {
        showError(msg);
        colour = "primary";
    };

    var showError = function showError(msg) {
        colour = "red";
        setActive(true);
        message = msg;
        $timeout.cancel(timeout);
        timeout = $timeout(function () {
            return setActive(false);
        }, 2000);
    };

    var getColour = function getColour() {
        return colour;
    };

    var getMessage = function getMessage() {
        return message;
    };

    var getActive = function getActive() {
        return active;
    };

    var setActive = function setActive(flag) {
        active = flag;
    };

    var switchActive = function switchActive() {
        active = !active;
    };

    var init = function init() {};

    init();

    $rootScope.Alert = {
        showMessage: showMessage,
        showError: showError
    };

    return {
        showMessage: showMessage,
        showError: showError,
        getMessage: getMessage,
        getColour: getColour,
        getActive: getActive,
        setActive: setActive,
        switchActive: switchActive
    };
});
'use strict';

app.factory('API', function ($rootScope, $http) {

    var API_URL = "/api/";

    var login = function login(object) {
        return $http.get(API_URL + "login/", { params: object }).then(function (response) {
            console.log(response.data);
            return response.data;
        });
    };

    var getPosts = function getPosts(object) {
        return $http.get(API_URL + "posts/", { params: object }).then(function (response) {
            console.log(response.data);
            return _.map(response.data, function (post) {
                return post.replace(/.json/g, '');
            });
        });
    };

    var getPostById = function getPostById(id) {
        return $http.get(API_URL + 'posts/id/' + id, {}).then(function (response) {
            console.log(response.data);
            return response.data;
        });
    };

    return {
        login: login,
        getPosts: getPosts,
        getPostById: getPostById
    };
});
'use strict';

app.directive('header', function () {
    return {
        templateUrl: 'header.html',
        scope: {},

        link: function link(scope, element, attrs) {

            var init = function init() {};

            init();
        }
    };
});

'use strict';

app.directive('about', function ($timeout) {
    return {
        templateUrl: 'about.html',
        scope: {
            reverse: '='
        },

        link: function link(scope, element, attrs) {

            var random = _.random(0, 500);

            var getReverseClass = function getReverseClass() {
                return scope.reverse ? 'reverse' : '';
            };

            var getRandom = function getRandom() {
                return random;
            };

            var init = function init() {
                $timeout(function () {
                    return scope.ready = true;
                }, _.random(500));
                $timeout(function () {
                    return scope.ready2 = true;
                }, _.random(500));
            };

            init();

            scope = _.assign(scope, {
                getReverseClass: getReverseClass,
                getRandom: getRandom

            });
        }
    };
});

'use strict';

app.directive('heading', function () {
    return {
        templateUrl: 'heading.html',
        scope: {
            text: '='
        },

        link: function link(scope, element, attrs) {

            var init = function init() {};

            init();

            scope = _.assign(scope, {});
        }
    };
});

'use strict';

app.directive('hero', function (API, Post, $timeout) {
    return {
        templateUrl: 'hero.html',
        scope: {
            'postId': '=',
            'post': '='
        },

        link: function link(scope, element, attrs) {

            var post = {};
            scope.ready = false;

            var getPost = function getPost() {
                return post;
            };

            var loadPost = function loadPost() {
                return API.getPostById(scope.postId).then(function (response) {
                    post = new Post(response);
                    $timeout(function () {
                        return scope.ready = true;
                    }, _.random(500));
                });
            };

            var init = function init() {
                console.log(scope);
                loadPost();
            };

            init();

            scope.getPost = getPost;
        }
    };
});

'use strict';

app.directive('imageItem', function () {
    return {
        templateUrl: 'image-item.html',
        scope: {
            content: '='
        },

        link: function link(scope, element, attrs) {

            var init = function init() {};

            init();

            scope = _.assign(scope, {});
        }
    };
});

'use strict';

app.directive('paragraph', function ($sce) {
    return {
        templateUrl: 'paragraph.html',
        scope: {
            text: '='
        },

        link: function link(scope, element, attrs) {

            var getText = function getText() {
                return $sce.trustAsHtml(scope.text);
            };

            var init = function init() {};

            init();

            scope = _.assign(scope, {
                getText: getText
            });
        }
    };
});

'use strict';

app.directive('preview', function (API, Post, $timeout) {
    return {
        templateUrl: 'preview.html',
        scope: {
            reverse: '=',
            'postId': '='
        },

        link: function link(scope, element, attrs) {

            var post = {};

            var getReverseClass = function getReverseClass() {
                return scope.reverse ? 'reverse' : '';
            };

            var getPost = function getPost() {
                return post;
            };

            var loadPost = function loadPost() {
                return API.getPostById(scope.postId).then(function (response) {
                    post = new Post(response);
                    $timeout(function () {
                        return scope.ready = true;
                    }, _.random(500));
                    $timeout(function () {
                        return scope.ready2 = true;
                    }, _.random(500));
                });
            };

            var init = function init() {
                console.log(scope);
                loadPost();
            };

            init();

            scope.getReverseClass = getReverseClass;
            scope.getPost = getPost;
        }
    };
});

'use strict';

app.directive('quoteItem', function () {
    return {
        templateUrl: 'quote-item.html',
        scope: {
            content: '='
        },

        link: function link(scope, element, attrs) {

            var init = function init() {};

            init();

            scope = _.assign(scope, {});
        }
    };
});

'use strict';

app.directive('vid', function () {
    return {
        templateUrl: 'vid.html',
        scope: {
            src: '='
        },

        link: function link(scope, element, attrs) {

            var play = function play($event) {
                $($event.currentTarget).find('video')[0].play();
            };

            var pause = function pause($event) {
                $($event.currentTarget).find('video')[0].pause();
            };

            var init = function init() {};

            init();

            scope = _.assign(scope, {
                play: play,
                pause: pause

            });
        }
    };
});

app.controller('HomeCtrl', function ($element, $timeout, API, $scope) {

    var posts = [];

    var getPosts = function getPosts() {
        return posts;
    };

    var loadPosts = function loadPosts() {
        return API.getPosts().then(function (response) {
            posts = response;
            $element.find('[screen]').addClass('active');
        });
    };

    var init = function init() {
        loadPosts();
    };

    init();

    $scope.getPosts = getPosts;
});

app.controller('PostCtrl', function ($element, $timeout, API, $scope, Post, $stateParams) {

    var post = {};

    var getPost = function getPost() {
        return post;
    };

    var getId = function getId() {
        return $stateParams.id;
    };

    var loadPost = function loadPost() {
        return API.getPostById($stateParams.id).then(function (response) {
            post = new Post(response);
            $element.find('[screen]').addClass('active');
        });
    };

    var init = function init() {
        console.log($stateParams);
        loadPost();
    };

    init();

    $scope.getPost = getPost;
    $scope.getId = getId;
});