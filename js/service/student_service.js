'use strict';

angular.module('myApp').factory('StudentService', ['$http', '$q', function($http, $q){

    var REST_SERVICE_URI = 'https://shrouded-plateau-63841.herokuapp.com/students/';

    var factory = {
        fetchStudent: fetchStudent,
        fetchResults: fetchResults
        // createUser: createUser,
        // updateUser:updateUser,
        // deleteUser:deleteUser
    };

    return factory;

    function fetchStudent(id) {
        var deferred = $q.defer();
        $http.get(REST_SERVICE_URI + id)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while fetching student with id' + id);
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

    function fetchResults(id) {
        var deferred = $q.defer();
        $http.get(REST_SERVICE_URI + id + "/results")
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while fetching students results with id' + id);
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
}]);
