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

         //  self.fetchAllQuestions = function(){
         //      QuestionService.fetchAllQuestions()
         //          .then(
         //                       function(d) {
         //                            self.questions = d;
         //                       },
         //                        function(errResponse){
         //                            console.error('Error while fetching questions');
         //                        }
         //               );
         //  };
         //
         //  self.fetchQuestion = function(id){
         //      QuestionService.fetchQuestion(id)
         //          .then(
         //                       function(d) {
         //                            self.questions = d;
         //                       },
         //                        function(errResponse){
         //                            console.error('Error while fetching question ' + id);
         //                        }
         //               );
         //  };
         //
         //  self.createQuestion = function(question){
         //      QuestionService.createQuestion(question)
         //              .then(
         //              self.fetchAllQuestions,
         //                      function(errResponse){
         //                           console.error('Error while creating question.');
         //                      }
         //          );
         //  };
         //
         // self.updateQuestion = function(question, id){
         //      QuestionService.updateQuestion(question, id)
         //              .then(
         //                      self.fetchAllQuestions,
         //                      function(errResponse){
         //                           console.error('Error while updating question.');
         //                      }
         //          );
         //  };
         //
         // self.deleteQuestion = function(id){
         //      QuestionService.deleteQuestion(id)
         //              .then(
         //                      self.fetchAllQuestions,
         //                      function(errResponse){
         //                           console.error('Error while deleting question.');
         //                      }
         //          );
         //  };
         //
         //  self.fetchAllQuestions();
         //
         //  self.submit = function() {
         //      if(self.question._id===null){
         //          console.log('Saving New question', self.question);
         //          self.createQuestion(self.question);
         //      }else{
         //          self.updateQuestion(self.question, self.question._id);
         //          console.log('question updated with id ', self.question._id);
         //      }
         //      self.reset();
         //  };
         //
         //  self.edit = function(id){
         //      console.log('id to be edited', id);
         //      for(var i = 0; i < self.questions.length; i++){
         //          if(self.questions[i]._id === id) {
         //             self.question = angular.copy(self.questions[i]);
         //             break;
         //          }
         //      }
         //  }
         //
         //  self.remove = function(id){
         //      console.log('id to be deleted', id);
         //      if(self.question._id === id) {//clean the form if the user to be deleted is shown there.
         //          self.reset();
         //      }
         //      self.deleteQuestion(id);
         //  }
         //
         //  self.reset = function(){
         //      self.user={_id:null,question:'',answers:[],answer:'', score: null};
         //      $scope.myForm.$setPristine(); //reset Form
         //  }

      }]);
