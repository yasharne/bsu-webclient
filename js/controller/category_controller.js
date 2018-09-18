'use strict';

App.controller('CategoryController', ['$scope', 'CategoryService', function($scope, CategoryService) {
          var self = this;
          self.categories = {};
          self.category = '';

          self.fetchCategories = function(){
            CategoryService.fetchCategories()
              .then(
                function(d) {
                  self.categories = d;
                },
                function(errResponse) {
                  console.error('Error fetching categories ');
                }
              )
          };




          self.newCategory = function(){
            CategoryService.newCategory(self.category)
              .then(
                self.category = '',
                self.fetchCategories(),
                function(err){
                  console.error("error updating categories");
                }
              )
          };



          self.fetchCategories();
      }]);
