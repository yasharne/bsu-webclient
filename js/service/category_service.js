'use strict';
App.factory('CategoryService', ['$http', '$q', function($http, $q){

  var CATEGORY_SERVICE_URI = 'https://shrouded-plateau-63841.herokuapp.com/categories/';

  var factory = {
      fetchCategories: fetchCategories,
      newCategory: newCategory
  };

  return factory;

  function fetchCategories() {
      var deferred = $q.defer();
      $http.get(CATEGORY_SERVICE_URI)
          .then(
          function (response) {
              deferred.resolve(response.data);
          },
          function(errResponse){
              console.error('Error while fetching categories');
              deferred.reject(errResponse);
          }
      );
      return deferred.promise;
  }

  function newCategory(category) {
    var deferred = $q.defer();
    var data = {"name": category};
    $http.post(CATEGORY_SERVICE_URI, data)
    .then(
      function(response) {
        deferred.resolve( response.data);
      },
      function(error) {
        console.error("error saving new category");
        deferred.reject(error);
      }
    );
    return deferred.promise;
  }
}]);
