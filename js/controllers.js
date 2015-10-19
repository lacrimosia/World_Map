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

  .controller('HomeCtrl', ['$scope', '$http', '$uibModal', 'modalService', 'Data', function($scope, $http, $uibModal, modalService, Data) {

     $scope.oneAtATime = true;
     $scope.change = true;
     $scope.theTitle = "";
     $scope.theDescription = "";
     $scope.clicked = false;
     $scope.close = false;
     $scope.openBook = false;

  // The popover
   $scope.dynamicPopover = {
    content: 'Hello, World!',
    templateUrl: 'myPopoverTemplate.html',
    title: 'Title'
  };


    $scope.toggleLightbox = function() {
      $scope.data.caseStudyLightbox = !$scope.data.caseStudyLightbox;
    }

    $scope.openMe = function(size, myFullImage, titleName, info){
     $scope.ModelInstance = $uibModal.open({
      animation: true,
      backdrop: 'static',
      template: '<div class="modalBox animated fadeIn"><button class="btn btn-danger pull-right" type="button" ng-click="ok()" uib-tooltip="Close"><i class="fa fa-times"></i></button><h1>'+titleName+'</h1><p>'+info+'<img src="img/'+myFullImage+'" class="img-responsive" alt="'+myFullImage+'" /></div>',
      size: size,
      scope: $scope, 
      keyboard: true
      });
    };

    $scope.ok = function () {
        $scope.ModelInstance.close();
        $scope.clicked = true;
    };

    $scope.openHelpMenu = function(size){
      $scope.HelpModal = $uibModal.open({
      animation: true,
      backdrop: 'static',
      templateUrl: 'partials/help.html',
      size: size,
      scope: $scope,
      keyboard: true
      });
    };

    $scope.openBook = function(size, title, description){
      $scope.BookModal = $uibModal.open({
      animation: true,
      backdrop: 'static',
      template: '<div class="modalBox animated fadeIn"><button class="btn btn-primary pull-right" type="button" ng-click="closeBookModal()" uib-tooltip="Close"><i class="fa fa-times"></i></button><h1>'+title+'</h1><p>'+description+'</p><div class="next"><div class="modal-footer"><button class="btn btn-primary pull-right" type="button" uib-tooltip="Read more"><i class="fa fa-book"></i> Read more</button></div></div></div>',
      size: size,
      scope: $scope,
      keyboard: true
      });
    };

    $scope.closeHelpMenu = function(){
      $scope.HelpModal.close();
      $scope.clicked = true;
    };

    $scope.closeBookModal = function(){
      $scope.BookModal.close();
      $scope.clicked = true;
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

       console.log($scope.clicked);
    };

    /*
    service call

    $scope.opens = function(titles, desc){
      modalService.openMenuModal('partials/modal.html', titles, desc);
    };*/


  }]);