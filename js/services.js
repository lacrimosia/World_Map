'use strict';

angular.module('myApp.services', ['ui.bootstrap'])

  .factory('Data', ['$http', function($http) {

		return $http.get('js/data.json');
    // return {
    //   getData: function() {
    //     return $http.get('js/data.json');
    //   }
    // }

  }])

  .factory('modalService', ['$uibModal', function($uibModal){
  	return {
        openMenuModal: function(templateLink, titles, desc) {
            var modalObj = $uibModal.open({
            templateUrl: templateLink,
            backdrop: 'static',
            controller: function($scope,$modalInstance){
              $scope.ok = function(id){
                //Process Close Button Click
                 $modalInstance.close(); 
              },
               $scope.cancel = function(){
                $modalInstance.dismiss('cancel');
              }
            },
            size: 'md',
            keyboard: true,
            resolve: {
              name: function () {
                return titles;
              },
              description: function () {
                console.log(desc);
                return desc;
              }
          }
        });
        }

        /*
        myData: function(){
            appData.success(function(data) {
              console.log('data', data);
              return data;
            });
        }*/
    };

  }]);