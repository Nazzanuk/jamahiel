'use strict';

app.directive('vid', () => {
    return {
        templateUrl: 'vid.html',
        scope: {
            src:'='
        },

        link(scope, element, attrs) {

            var play = ($event) => {
                $($event.currentTarget).find('video')[0].play()
            };

            var pause = ($event) => {
                $($event.currentTarget).find('video')[0].pause()
            };

            var init = () => {
            };

            init();

            scope = _.assign(scope, {
                play:play,
                pause:pause

            });
        }
    }
});
