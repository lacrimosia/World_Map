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

  .factory('modalService', ['Data', function(Data){
    var appData = Data;

  	return {
        openMenuModal: function(templateLink) {
            var modalInstance = $modal.open({
                templateUrl: templateLink,
                backdrop: 'static',
                controller: function($scope, $modalInstance) {
                    $scope.close = function() {
                        $modalInstance.close();
                    };
                },
                size: 'md',
                scope: $scope,
      			keyboard: true
            });

        },
        myData: function(){
          return appData;
        }
    };

  }]);