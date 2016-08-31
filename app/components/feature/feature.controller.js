(function () {
    angular.module('myApp')
    .controller('FeatureController', featureController);

    function featureController($scope, widgetService) {
        $scope.featureMessage = 'TODO: Build out an awesome Angular app';
        $scope.widgetList = widgetService.getWidgets();
    }
})();
