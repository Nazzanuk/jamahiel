'use strict';

app.directive('about', () => {
    return {
        templateUrl: 'about.html',
        scope: {
            reverse:'='
        },

        link(scope, element, attrs) {

            var random = _.random(0, 500);

            var getReverseClass = () => {
                return scope.reverse ? 'reverse' : '';
            };

            var getRandom = () => {
                return random;
            };

            var init = () => {
            };

            init();

            scope = _.assign(scope, {
                getReverseClass : getReverseClass,
                getRandom : getRandom

            });
        }
    }
});
