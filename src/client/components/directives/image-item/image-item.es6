'use strict';

app.directive('imageItem', () => {
    return {
        templateUrl: 'image-item.html',
        scope: {
            content:'='
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
