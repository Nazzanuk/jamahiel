'use strict';

app.directive('comments', ($timeout) => {
    return {
        templateUrl: 'comments.html',
        scope: {
            id:'=',
            title:'=theTitle'
        },

        link(scope, element, attrs) {

            var init = () => {
                var disqus_config = function () {
                    this.page.url = `http://www.jamahiel.com/post/${scope.id}`;  // Replace PAGE_URL with your page's canonical URL variable
                    this.page.identifier = scope.id; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
                };

                var d = document, s = d.createElement('script');

                s.src = '//jamahiel.disqus.com/embed.js';

                s.setAttribute('data-timestamp', +new Date());
                (d.head || d.body).appendChild(s);
            };

            init();

            scope = _.assign(scope, {
            });
        }
    }
});
