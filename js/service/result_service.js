'use strict';

angular.module('myApp').factory('ResultService', ['$http', '$q', function($http, $q){

    var REST_SERVICE_URI = 'https://shrouded-plateau-63841.herokuapp.com/results/';

    var factory = {
        fetchResults: fetchResults,
        generate_excel: generate_excel
    };

    return factory;


    function fetchResults() {
        var deferred = $q.defer();
        $http.get(REST_SERVICE_URI)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while fetching results');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

    function generate_excel() {
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while generating results in excel');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
}]);
