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

  .controller('HomeCtrl', function($scope, $http, $modal, Popup, Data, ModalBox, Position, GetMyLocation) {
     

     Data.success(function(data) {
      $scope.data = data;
    });

     $scope.oneAtATime = true;
     $scope.change = true;
     $scope.change1 = false;
     $scope.theTitle = "";
     $scope.theDescription = "";
     $scope.clicked = false;
     GetMyLocation.what();

    $scope.toggleLightbox = function() {
      $scope.data.caseStudyLightbox = !$scope.data.caseStudyLightbox;
    }

    $scope.openMe = function(){
       ModalBox.OpenDiv(size, myFullImage, titleName, info);
    };

    $scope.ok = function () {
        $scope.ModelInstance.close();
         Popup.CloseMe('$scope.clicked');
    };

    $scope.prompt = function(index) {
      $scope.data.things.forEach(function(thing) {
        thing.promptOpen = true;
      });
      var thing = $scope.data.things[index];
      Popup.OpenMe('thing.promptOpen');
    }

    $scope.clearAll = function() {
      $scope.data.things.forEach(function(thing) {
        thing.promptOpen = false;
      });
    }

    $scope.closePopup = function(thing) {
      if (thing.choiceMade) {
        Popup.CloseMe('thing.promptOpen');
      }
    }

    $scope.popupStyle = function(thing) {
      if (thing.choiceMade) {
        return;
      } else {
        return {'top': Position.getY(thing.y) + '%', 'left': Position.getX(thing.x) + '%'};
      }
    }

    $scope.pointStyle = function(thing) {
      return {'top': Position.getY(thing.y) + '%', 'left': Position.getX(thing.x) + '%'};
    }

    $scope.makeSelection = function(thing, selection) {
      thing.selection = selection;
      thing.choiceMade = true;
      $scope.clicked = true;
    }

    $scope.unCheck = function(){
       Popup.CloseMe('$scope.clicked');
    };

  });