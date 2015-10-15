'use strict';

app.directive('heading', () => {
    return {
        templateUrl: 'heading.html',
        scope: {
            text:'='
        },

        link(scope, element, attrs) {

            var init = () => {
            };

            init();

            scope = _.assign(scope, {
            });
        }
    }
});
