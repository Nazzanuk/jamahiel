'use strict';

app.directive('paragraph', () => {
    return {
        templateUrl: 'paragraph.html',
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
