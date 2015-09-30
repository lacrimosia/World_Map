'use strict';

angular.module('myApp.services', [])

  .factory('Data', ['$http', function($http) {

		return $http.get('js/data.json');

  }]);