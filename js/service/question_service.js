'use strict';

App.factory('QuestionService', ['$http', '$q', function($http, $q){

  var CATEGORY_SERVICE_URI = 'https://shrouded-plateau-63841.herokuapp.com/categories/';
  var QUESTIONSET_SERVICE_URI = 'https://shrouded-plateau-63841.herokuapp.com/questionsets/';

  var factory = {
      fetchCategories: fetchCategories,
      newQuestionSet: newQuestionSet,
      fetchQuestionSets: fetchQuestionSets
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

  function newQuestionSet(questionSet) {
    var deferred = $q.defer();
    $http.post(QUESTIONSET_SERVICE_URI, questionSet)
    .then(
      function(response) {
        deferred.resolve( response.data);
      },
      function(error) {
        console.error("error saving new questionset");
        deferred.reject(error);
      }
    );
    return deferred.promise;
  }

  function fetchQuestionSets() {
    var deferred = $q.defer();
    $http.get(QUESTIONSET_SERVICE_URI, {headers:{'Cache-Control': 'no-cache'}})
        .then(
        function (response) {
            deferred.resolve(response.data);
        },
        function(errResponse){
            console.error('Error while fetching questionsets');
            deferred.reject(errResponse);
        }
    );
    return deferred.promise;
  }


   //  return {
   //
   //  fetchAllQuestions: function() {
   //          return $http.get('http://localhost:3000/questions')
   //          .then(
   //                  function(response){
   //                      return response.data;
   //                  },
   //                  function(errResponse){
   //                      console.error('Error while fetching questions');
   //                      return $q.reject(errResponse);
   //                  }
   //          );
   //      },
   //
   //      fetchQuestion: function(id) {
   //              return $http.get('http://localhost:3000/questions/'+id)
   //              .then(
   //                      function(response){
   //                          return response.data;
   //                      },
   //                      function(errResponse){
   //                          console.error('Error while fetching questions');
   //                          return $q.reject(errResponse);
   //                      }
   //              );
   //          },
   //
   //  createQuestion: function(question){
   //    delete question["_id"];
   //        console.log("data: " + question['question'])
   //          return $http.post('http://localhost:3000/questions/', question)
   //          .then(
   //                  function(response){
   //                      return response.data;
   //                  },
   //                  function(errResponse){
   //                      console.error('Error while creating question');
   //                      return $q.reject(errResponse);
   //                  }
   //          );
   //      },
   //
   //  updateQuestion: function(question, id){
   //          return $http.put('http://localhost:3000/questions/'+id, question)
   //          .then(
   //                  function(response){
   //                      return response.data;
   //                  },
   //                  function(errResponse){
   //                      console.error('Error while updating question');
   //                      return $q.reject(errResponse);
   //                  }
   //          );
   //      },
   //
   // deleteQuestion: function(id){
   //          return $http.delete('http://localhost:3000/questions/'+id)
   //          .then(
   //                  function(response){
   //                      return response.data;
   //                  },
   //                  function(errResponse){
   //                      console.error('Error while deleting question');
   //                      return $q.reject(errResponse);
   //                  }
   //          );
   //      }
   //
   //  };

}]);
