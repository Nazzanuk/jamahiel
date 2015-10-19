'use strict';

app.factory('State', function ($rootScope) {

    var menuVisible = false;

    var isMenuVisible = () => {
        return menuVisible;
    };

    var toggleMenu = () => {
        menuVisible = !menuVisible;
    };

    return {
        isMenuVisible: isMenuVisible,
        toggleMenu: toggleMenu
    };
});