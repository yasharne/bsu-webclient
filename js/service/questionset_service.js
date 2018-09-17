'use strict';

App.factory('QuestionSetService', ['$http', '$q', function($http, $q){

  var CATEGORY_SERVICE_URI = 'https://shrouded-plateau-63841.herokuapp.com/categories/';
  var QUESTIONSET_SERVICE_URI = 'https://shrouded-plateau-63841.herokuapp.com/questionsets/';

  var factory = {
      fetchQuestionset: fetchQuestionset,
      addQuestion: addQuestion
  };

  return factory;

  function fetchQuestionset(id) {
      var deferred = $q.defer();
      $http.get(QUESTIONSET_SERVICE_URI + id)
          .then(
          function (response) {
              deferred.resolve(response.data);
          },
          function(errResponse){
              console.error('Error while fetching questionset ' + id);
              deferred.reject(errResponse);
          }
      );
      return deferred.promise;
  }


  function addQuestion(question, id) {
      var deferred = $q.defer();
      $http.put(QUESTIONSET_SERVICE_URI+id, question)
          .then(
          function (response) {
              deferred.resolve(response.data);
          },
          function(errResponse){
              console.error('Error while updating questionset ' + id);
              deferred.reject(errResponse);
          }
      );
      return deferred.promise;
  }

}]);
