'use strict';

angular.module('myApp.controllers', [])

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

  .controller('HomeCtrl', function($scope, $http) {

    $scope.toggleLightbox = function() {
      $scope.data.caseStudyLightbox = !$scope.data.caseStudyLightbox;
    }

    $scope.prompt = function(index) {
      $scope.data.things.forEach(function(thing) {
        thing.promptOpen = false;
      });
      var thing = $scope.data.things[index];
      thing.promptOpen = true;
    }

    $scope.clearAll = function() {
      $scope.data.things.forEach(function(thing) {
        thing.promptOpen = false;
      });
    }

    $scope.closePopup = function(thing) {
      if (thing.choiceMade) {
        thing.promptOpen = false;
      }
    }

    $scope.popupStyle = function(thing) {
      if (thing.choiceMade) {
        return;
      } else {
        return {'top': thing.y + '%', 'left': thing.x + '%'};
      }
    }

    $scope.pointStyle = function(thing) {
      return {'top': thing.y + '%', 'left': thing.x + '%'};
    }

    $scope.makeSelection = function(thing, selection) {
      thing.selection = selection;
      thing.choiceMade = true;
    }

  });