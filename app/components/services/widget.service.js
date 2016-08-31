(function () {
    angular.module('myApp')
    .factory('widgetService', widgetService);

    function widgetService($http, $q) {
        var service = {
            getWidgets: getWidgets
            //TODO: Extend service as you see fit
        };

        return service;

        function getWidgets() {
            return [{ Id: 1, Color: 'Blue', Size: 'Small' },
                    { Id: 2, Color: 'Green', Size: 'Large' }];

            //TODO: build out actual API endpoints
            //Examples below
        }

        //function Create(feature) {
        //    return $http.post('/api/widgets', widget).then(handleSuccess, handleError);
        //}

        //function Update(feature) {
        //    return $http.put('/api/widgets/' + widget._id, user).then(handleSuccess, handleError);
        //}

        //function Delete(_id) {
        //    return $http.delete('/api/widgets/' + _id).then(handleSuccess, handleError);
        //}

        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(res) {
            return $q.reject(res.data);
        }
    }

})();
