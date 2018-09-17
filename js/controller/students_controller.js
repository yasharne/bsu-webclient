'use strict';
App
// .factory('Excel',function($window){
// 		var uri='data:application/vnd.ms-excel;base64,',
// 			template='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
// 			base64=function(s){return $window.btoa(unescape(encodeURIComponent(s)));},
// 			format=function(s,c){return s.replace(/{(\w+)}/g,function(m,p){return c[p];})};
// 		return {
// 			tableToExcel:function(tableId,worksheetName){
// 				var table=$(tableId),
// 					ctx={worksheet:worksheetName,table:table.html()},
// 					href=uri+base64(format(template,ctx));
// 				return href;
// 			}
// 		};
// 	})
  // .controller('StudentsController', ['$scope', 'StudentsService', 'Excel', '$timeout',
  //  function($scope, StudentsService, Excel, $timeout) {
    .controller('StudentsController', ['$scope', 'StudentsService',
      function($scope, StudentsService) {
          var self = this;
          // self.question={_id: null,question:'',answers:[],answer:'', score: null};
          self.students=[];

          self.fetchAllStudents = function(){
              StudentsService.fetchAllStudents()
                  .then(
                               function(d) {
                                    self.students = d;
                                    console.log(d);
                               },
                                function(errResponse){
                                    console.error('Error while fetching students');
                                }
                       );
          };
          self.fetchAllStudents();

  //         self.exportToExcel=function(tableId){
  // $scope.exportHref=Excel.tableToExcel(tableId,'Students');
  // $timeout(function(){location.href=$scope.exportHref;},100);
// }

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
