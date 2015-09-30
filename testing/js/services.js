'use strict';

angular.module('myApp.services', [])

  .factory('Data', ['$http', function($http) {

		return $http.get('js/data.json');

  }])

  .factory('Popup', function(){
      return{
          CloseMe: function(name){
             name = false;
          },

          OpenMe: function(name){
             name = true;
          }
      }  
  })

  .factory('ModalBox', function(){
     return{
      openDiv: function(size, myFullImage, titleName, info){
        $scope.ModelInstance = $modal.open({
         animation: true,
         template: '<div class="modalBox"><button class="btn btn-danger pull-right" type="button" ng-click="ok()" tooltip="Close"><i class="fa fa-times"></i></button><h1>'+titleName+'</h1><p>'+info+'<img src="img/'+myFullImage+'" class="img-responsive" alt="'+myFullImage+'" /></div>',
         size: size,
        scope: $scope
       });
      }   
     }
  })

  .factory('Position', function(){
    return{
      getX: function(xval){
         return xval;
      },
      getY: function(yval){
         return yval;
      }
    }
  })

  .factory('GetMyLocation', function($rootScope){
     return{
        what: function(){
          console.log($rootScope);
          return $rootScope;
        }
     }
  });