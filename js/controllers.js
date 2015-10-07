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

  .controller('HomeCtrl', function($scope, $http, $modal) {

     $scope.oneAtATime = true;
     $scope.change = true;
     $scope.theTitle = "";
     $scope.theDescription = "";
     $scope.clicked = false;


      $scope.dynamicPopover = {
    content: 'Hello, World!',
    templateUrl: 'myPopoverTemplate.html',
    title: 'Title'
  };


    $scope.toggleLightbox = function() {
      $scope.data.caseStudyLightbox = !$scope.data.caseStudyLightbox;
    }

    $scope.openMe = function(size, myFullImage, titleName, info){
     $scope.ModelInstance = $modal.open({
      animation: true,
      template: '<div class="modalBox"><button class="btn btn-danger pull-right" type="button" ng-click="ok()" tooltip="Close"><i class="fa fa-times"></i></button><h1>'+titleName+'</h1><p>'+info+'<img src="img/'+myFullImage+'" class="img-responsive" alt="'+myFullImage+'" /></div>',
      size: size,
      scope: $scope
      });
    };

    $scope.ok = function () {
        $scope.ModelInstance.close();
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

  });