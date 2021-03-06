'use strict';

app.directive('paragraph', ($sce) => {
    return {
        templateUrl: 'paragraph.html',
        scope: {
            text: '='
        },

        link(scope, element, attrs) {

            var getText = () => {
                return $sce.trustAsHtml(scope.text);
            };

            var init = () => {
            };

            init();

            scope = _.assign(scope, {
                getText: getText
            });
        }
    }
});
