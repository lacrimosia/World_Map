'use strict';

angular.module('myApp', [
  'myApp.controllers',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
	'ui.router'
])

  .run(
    [ '$rootScope', '$http', '$state', '$stateParams', 'Data',
      function ($rootScope, $http, $state, $stateParams, Data) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
        $rootScope.copyright = new Date().getFullYear();
        Data.success(function(data) {
          $state.appTitle = data.appTitle;
          $state.coursePrefix = data.coursePrefix;
          $state.courseNumber = data.courseNumber;
        });
      }
    ]
  )

  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state("Home", {
        url: "/",
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      });

    $urlRouterProvider.otherwise('/');

  });