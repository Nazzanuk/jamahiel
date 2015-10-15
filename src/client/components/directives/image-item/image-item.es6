'use strict';

app.directive('imageItem', () => {
    return {
        templateUrl: 'image-item.html',
        scope: {
            src:'='
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
