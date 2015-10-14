'use strict';

angular.module('myApp.services', [])

  .factory('Data', ['$http', function($http) {

		return $http.get('js/data.json');

  }])

  .factory('modalService', function($scope){
  	return {
        openMenuModal: function(templateLink, windowAnimation) {
            var modalInstance = $modal.open({
                templateUrl: templateLink,
                backdrop: 'static',
                windowClass: windowAnimation,
                controller: function($scope, $modalInstance) {
                    $scope.close = function() {
                        $modalInstance.close();
                    };
                },
                size: 'md',
                scope: $scope,
      			keyboard: true
            });

        }
    };

  });