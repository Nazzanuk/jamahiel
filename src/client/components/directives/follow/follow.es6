'use strict';

app.directive('follow', ($timeout) => {
    return {
        templateUrl: 'follow.html',
        scope: {},

        link(scope, element, attrs) {

            var init = () => {
                $timeout(() => {
                    if (localStorage.getItem('follow') != true) {
                        scope.ready = true;
                    }
                    localStorage.setItem('follow', true);
                }, 30000);
            };

            init();

            scope = _.assign(scope, {});
        }
    }
});
