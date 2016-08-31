(function () {
    angular.module('myApp')
    .directive('widgetList', function (APP_ROOT) {
        return {
            restrict: 'E', //E = element, A = attribute, C = class, M = comment
            scope: {
                //@ reads the attribute value, = provides two-way binding, & works with functions
                fields: '='
            },
            templateUrl: APP_ROOT + '/report/widget-list/widget-list.html',
            controller: widgetListController,
        };
    });

    function widgetListController($scope) {
        $scope.label = "Widget List";
    }

})();
