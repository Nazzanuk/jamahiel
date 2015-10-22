'use strict';

app.directive('follow', ($timeout) => {
    return {
        templateUrl: 'follow.html',
        scope: {
        },

        link(scope, element, attrs) {

            var init = () => {
                $timeout(() => scope.ready = true, 5000);
            };

            init();

            scope = _.assign(scope, {
                getReverseClass: getReverseClass,
                getRandom: getRandom

            });
        }
    }
});
