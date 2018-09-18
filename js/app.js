'use strict';

var App = angular.module('myApp',['ui.router']);

App.config(['$httpProvider', '$stateProvider', '$urlRouterProvider',
    function($httpProvider, $stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");
  $stateProvider
      .state('Home', {
        url: '/',
          templateUrl: "template/home.html"
      })
      .state('Students', {
          url:'/students',
          templateUrl: 'template/students.html'
      })
      .state('Student', {
          url:'/student/:id',
          templateUrl: 'template/student.html',
          controller: function($scope, $stateParams){
            $scope.id = $stateParams.id;
          }
      })
      .state('Categories', {
          url: '/categories',
          templateUrl: 'template/categories.html'
      })
      .state('Questionsets', {
          url: '/questionsets',
          templateUrl: 'template/questionsets.html'
      })
      .state('Questionset', {
          url:'/questionset/:id',
          templateUrl: 'template/questionset.html',
          controller: function($scope, $stateParams){
            $scope.id = $stateParams.id;
          }
      })
}]);
