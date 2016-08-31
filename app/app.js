(function() {
    'use strict';

    angular.module('myApp', ['ui.bootstrap', 'ui.router', 'smart-table'])
    .constant('APP_ROOT', '/app/components')
    .config(configureRoutes);

    function configureRoutes($stateProvider, $urlRouterProvider, APP_ROOT) {
        $urlRouterProvider.otherwise("/state1");

        $stateProvider.
            state('feature', {
                url: '/feature',
                templateUrl: APP_ROOT + '/feature/featureController.html',
                controller: 'featureController'
            });
    }

})();
