'use strict';

App.controller('QuestionSetController', ['$scope', 'QuestionSetService', function($scope, QuestionSetService) {
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
            try{
              self.question.id = self.questionset.questions.length + 1;
            }
            catch(error){
              self.question.id = 1;
            }
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
                  self.question.id++;
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
            console.log('hereeeeee');
            for (var i = 0; i < self.question.answers.length; i++) {
              delete self.question.answers[i]["$$hashKey"]
            }
            console.log(self.question);
            QuestionSetService.addQuestion(self.question, $scope.id)
              .then(
                self.fetchQuestionset($scope.id),
                function(err){
                  console.error("error updating questionset");
                }
              )
          };



          self.fetchQuestionset($scope.id);

          // self.newQuestionSet = function(name, category){
          //   var questionSet = {'name': name, 'category': category};
          //   QuestionService.newQuestionSet(questionSet)
          //     .then(
          //       self.fetchAllQuestionSets,
          //       function(err){
          //         console.error(err);
          //       }
          //     )
          // };
          //
          // self.fetchAllQuestionSets = function(){
          //   QuestionService.fetchQuestionSets()
          //     .then(
          //       function(d) {
          //         self.questionsets = d;
          //       },
          //       function(errResponse) {
          //         console.error('Error fetching questionsets');
          //       }
          //     )
          // };
      }]);
