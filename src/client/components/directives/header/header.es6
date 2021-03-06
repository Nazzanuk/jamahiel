'use strict';

app.directive('header', (State) => {
    return {
        templateUrl: 'header.html',
        scope: {},

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
