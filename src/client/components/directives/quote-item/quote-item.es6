'use strict';

app.directive('quoteItem', () => {
    return {
        templateUrl: 'quote-item.html',
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
