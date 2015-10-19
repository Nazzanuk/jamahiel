'use strict';

app.directive('menuOverlay', ($timeout, State) => {
    return {
        templateUrl: 'menu.html',
        scope: {
            reverse:'='
        },

        link(scope, element, attrs) {


            var init = () => {
            };

            init();

            scope = _.assign(scope, {
                    isMenuVisible: State.isMenuVisible,
                    toggleMenu: State.toggleMenu
            });
        }
    }
});
