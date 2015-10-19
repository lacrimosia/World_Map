'use strict';

angular.module('myApp.controllers', ['ui.bootstrap'])

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

  .controller('HomeCtrl', [
    '$scope',
    '$http',
    '$uibModal',
    'modalService',
    'Data',
    function($scope, $http, $uibModal, modalService, Data) {

     $scope.oneAtATime = true;
     $scope.change = true;
     $scope.theTitle = "";
     $scope.theDescription = "";
     $scope.clicked = false;
     $scope.close = false;
     $scope.openBook = false;


    $scope.toggleLightbox = function() {
      $scope.data.caseStudyLightbox = !$scope.data.caseStudyLightbox;
    }

    $scope.openMe = function(title, description, myFullImage){
      modalService.openMenuModal('partials/FullSizeModal.html', title, description, myFullImage);
    };

    $scope.openHelpMenu = function(size, title, description){
      modalService.openMenuModal('partials/help.html');
    };

    $scope.openBook = function(size, title, description){
      modalService.openMenuModal('partials/modal.html', title, description);
    };

    $scope.prompt = function(index) {
      $scope.data.things.forEach(function(thing) {
        thing.promptOpen = true;
      });
      var thing = $scope.data.things[index];

      // alert(thing.Books[index].name);
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
      $scope.clicked = true;
       console.log($scope.clicked);
    }

    $scope.unCheck = function(){
       $scope.clicked=false;

       // console.log($scope.clicked);
    };

  }]);