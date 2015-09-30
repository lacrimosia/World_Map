'use strict';

angular.module('myApp.controllers', ['ui.bootstrap', 'ngAnimate'])

  .controller('AppCtrl', function($scope, $http, Data) {

    $scope.includes = {
      // oeMenu: 'partials/oe-menu.html',
      // oeHeader: 'partials/oe-header.html',
      oeFooter: 'partials/oe-footer.html'
    }

    $scope.oeMenu = {
      open: false
    }

    $scope.oeMenuToggle = function(toggle) {
      if(toggle == 'off') {
        $scope.oeMenu.open = false;
      } else {
        $scope.oeMenu.open = !$scope.oeMenu.open;
      }
    }

    Data.success(function(data) {
      $scope.data = data;
    });

  })

  .controller('HomeCtrl', function($scope, $http, Data, $modal) {
     

     Data.success(function(data) {
      $scope.data = data;
    });

    $scope.openMe = function(size, myFullImage, titleName, info){
     $scope.ModelInstance = $modal.open({
      animation: true,
      template: '<div class="modalBox"><button class="btn btn-danger pull-right" type="button" ng-click="ok()" tooltip="Close"><i class="fa fa-times"></i></button><h1>'+titleName+'</h1><p>'+info+'<img src="img/'+myFullImage+'" class="img-responsive" alt="'+myFullImage+'" /></div>',
      size: size,
      scope: $scope
      });
    };

  

  });