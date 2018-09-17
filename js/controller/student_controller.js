'use strict';
App.controller('StudentController', ['$scope', 'StudentService', '$window', function($scope, StudentService, $window) {
          var self = this;
          // self.question={_id: null,question:'',answers:[],answer:'', score: null};
          self.student = {};
          self.results = {};

          self.fetchStudent = function(id){
              StudentService.fetchStudent(id)
                  .then(
                               function(d) {
                                    self.student = d;

                               },
                                function(errResponse){
                                    console.error('Error while fetching student id' + id);
                                }
                       );
          };

          self.fetchResults = function(id){
              StudentService.fetchResults(id)
                  .then(
                               function(d) {
                                    self.results = d;
                                    console.log(JSON.stringify(self.results));
                               },
                                function(errResponse){
                                    console.error('Error while fetching students result with id' + id);
                                }
                       );
          };
          self.fetchStudent($scope.id);
          self.fetchResults($scope.id);
          self.get_excel = function(){
            console.log('jjijijijiji');
            $window.open('http://localhost:3000/students/' + self.student._id + '/results/getexcel', '_blank')
          }
      }]);
