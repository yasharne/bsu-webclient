'use strict';
App.controller('ResultController', ['$scope', 'ResultService', '$window',
function($scope, ResultService, $window) {
          var self = this;
          self.results = {};
          self.begin = '';
          self.end = '';
          self.answered_categories = [];
          self.chosen_category = '';



          self.fetchResults = function(){
              ResultService.fetchResults()
                  .then(
                               function(d) {
                                    self.results = d;
                                    for (var cat in self.results) {
                                      if (self.results.hasOwnProperty(cat)) {
                                        if (!self.answered_categories.includes(self.results[cat].q_id.name)) {
                                          self.answered_categories.push(self.results[cat].q_id.name)
                                        }
                                      }
                                    }
                               },
                                function(errResponse){
                                    console.error('Error while fetching results');
                                }
                       );
          };
          self.fetchResults();

          self.export = function() {
            var b = new Date(self.begin);
            var e = new Date(self.end);
            // console.log(self.chosen_category);
            // console.log(d.getTime()/1000);
            $window.open('https://shrouded-plateau-63841.herokuapp.com/results/' +
            self.chosen_category + '/' +
            b.getTime() + '/' +
            e.getTime(), '_blank');
          }
          // self.get_excel = function(){
          //   $window.open('https://shrouded-plateau-63841.herokuapp.com/students/' + self.student._id + '/results/getexcel', '_blank')
          // }
      }]);
