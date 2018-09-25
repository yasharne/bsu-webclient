'use strict';

App.controller('QuestionSetController', ['$state', '$scope', 'QuestionSetService',
 function($state, $scope, QuestionSetService) {
          var self = this;
          self.questionset = {};
          self.question = {
            'id': 0,
            'question': '',
            'correct_answer': '',
            'score': 0,
            'answers': []
          };

          self.getQuestionId = function(){
            // try{
            //   self.biggest = 0;
            //   for (var i = 0; i < self.questionset.questions.length; i++) {
            //     console.log(self.questionset.questions[i].id);
            //     if (self.questionset.questions[i].id > self.biggest) {
            //       self.biggest = self.questionset.questions[i].id;
            //     }
            //   }
            //   self.question.id = self.biggest + 1;
            //   // self.question.id = self.questionset.questions.length + 1;
            // }
            // catch(error){
            //   console.log(error);
            //   self.question.id = 1;
            // }
            self.question.id = Math.random().toString(36).substr(2, 9);
          };

          self.fetchQuestionset = function(id){
            QuestionSetService.fetchQuestionset(id)
              .then(
                function(d) {
                  self.questionset = d;
                  self.question = {
                    'id': 0,
                    'question': '',
                    'correct_answer': '',
                    'score': 0,
                    'answers': []
                  };
                  self.getQuestionId();
                },
                function(errResponse) {
                  console.error('Error fetching questionset ' + id);
                }
              )
          };


          self.addNewChoice = function() {
            var newItemNo = self.question.answers.length+1;
            self.question.answers.push({'id' : newItemNo, 'value' : ''});
            console.log(JSON.stringify(self.question.answers));
          };

          self.removeNewChoice = function() {
            var newItemNo = self.question.answers.length;
            if ( newItemNo !== 0 ) {
              self.question.answers.pop();
            }
          };

          self.showAddChoice = function(choice) {
            return choice.id === self.question.answers[self.question.answers.length-1].id;
          };

          self.addQuestion = function(){
            for (var i = 0; i < self.question.answers.length; i++) {
              delete self.question.answers[i]["$$hashKey"]
            }
            QuestionSetService.addQuestion(self.question, $scope.id)
              .then(
                self.fetchQuestionset($scope.id),
                function(err){
                  console.error("error updating questionset");
                }
              )
          };



          self.fetchQuestionset($scope.id);

          self.deleteQuestionSet = function() {
            QuestionSetService.deleteQuestionSet($scope.id)
              .then(
                $state.go("Questionsets"),
                function(err){
                  console.error("error updating questionset");
                }
              )
          };

          self.deleteQuestion = function(questionId) {
            QuestionSetService.deleteQuestion($scope.id, questionId)
              .then(
                self.fetchQuestionset($scope.id),
                function(err){
                  console.error("error deleting question");
                }
              )
          };

          self.editQuestion = function(id) {
            for (var obj in self.questionset.questions) {
              if (self.questionset.questions.hasOwnProperty(obj)) {
                if (self.questionset.questions[obj].id == id) {
                  self.question = self.questionset.questions[obj]
                }
              }
            }
          }
      }]);
