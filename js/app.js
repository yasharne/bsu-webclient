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
      // .state('Manage', {
      //   url: '/manage',
      //     templateUrl: "template/manage.html"
      // })
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
      // .state('Questions', {
      //     url: '/questions',
      //     templateUrl: 'template/questions.html'
      // })
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
      .state('Property', {
          url: '/dashboard/property/{p_id}',
          templateUrl: 'template/property',
          controller: function ($scope, $stateParams) {
              $scope.p_id = $stateParams.p_id;
          }
      });
}]);
