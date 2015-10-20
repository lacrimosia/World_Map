'use strict';

angular.module('myApp.services', ['ui.bootstrap'])

  .factory('Data', ['$http', function($http) {

		return $http.get('js/data.json');
    // return {
    //   getData: function() {
    //     return $http.get('js/data.json');
    //   }
    // }

     /*
        myData: function(){
            appData.success(function(data) {
              console.log('data', data);
              return data;
            });
        }*/

  }])

// Modal Service for all the popups
  .factory('modalService', ['$uibModal', function($uibModal){
  	return {
      openMenuModal: function(templateLink, title, description, myFullImage, Link, theImage) {
        var modalObj = $uibModal.open({
          templateUrl: templateLink,
          backdrop: 'static',
          controller: function($scope, $modalInstance){
            $scope.title = title;
            $scope.description = description;
            $scope.myFullImage = myFullImage;
            $scope.Link = Link;
            $scope.thumb = theImage;
            $scope.ok = function(id){
              //Process Close Button Click
              $modalInstance.close(); 
            }
            $scope.cancel = function(){
              $modalInstance.dismiss('cancel');
            }
          },
          size: 'md',
          keyboard: true
        });
      }
    };

  }]);


         