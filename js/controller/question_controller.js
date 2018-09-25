'use strict';

App.controller('QuestionController', ['$scope', 'QuestionService', function($scope, QuestionService) {
          var self = this;
          // self.question={_id: null,question:'',answers:[],answer:'', score: null};
          // self.questions=[];
          self.categories = [];
          self.category = '';
          self.name = '';
          self.questionsets = [];


          self.fetchCategories = function(){
            QuestionService.fetchCategories()
              .then(
                function(d) {
                  self.categories = d;
                  console.log('d: ' + d);
                },
                function(errResponse) {
                  console.error('Error fetching categories');
                }
              )
          };

          self.newQuestionSet = function(name, category){
            var questionSet = {'name': name, 'category': category};
            QuestionService.newQuestionSet(questionSet)
              .then(
                self.fetchAllQuestionSets,
                function(err){
                  console.error(err);
                }
              )
          };

          self.fetchAllQuestionSets = function(){
            QuestionService.fetchQuestionSets()
              .then(
                function(d) {
                  self.questionsets = d;
                },
                function(errResponse) {
                  console.error('Error fetching questionsets');
                }
              )
          };

          self.fetchAllQuestionSets();
      }]);
