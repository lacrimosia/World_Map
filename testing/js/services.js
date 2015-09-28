'use strict';

angular.module('myApp.services', [])

  .factory('Data', ['$http', function($http) {

		return $http.get('js/data.json');

  }])

  .service('Book', function(){

  	     
         this.regionName = function(names){
  			      return names;
  		         };

  		 this.popUpTitle = function(theText){
  		   		return theText;
  		   };
  });