

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
      openMenuModal: function(templateLink, title, description, myFullImage, Link, theImage, index, array, credits) {
        var modalObj = $uibModal.open({
          templateUrl: templateLink,
          backdrop: 'static',
          size: 'lg',
          controller: function($scope, $modalInstance){
            $scope.title = title;
            $scope.description = description;
            $scope.myFullImage = myFullImage;
            $scope.Link = Link;
            $scope.thumb = theImage;
            $scope.index = index;
            $scope.Array = array;
            $scope.credit = credits;
            $scope.show = false;

            $scope.ok = function(id){
              //Process Close Button Click
              $modalInstance.close(); 
            }
            $scope.cancel = function(){
              $modalInstance.dismiss('cancel');
            }

            // go to next selection on click
            $scope.Next = function(){
              $scope.theArray = $scope.Array;
              $scope.Items = $scope.Array[++$scope.index];
              if($scope.Items === undefined){
                return;
              }else{
               $scope.title = $scope.Items.name;
                $scope.description = $scope.Items.description;  
                $scope.thumb = $scope.Items.image;
              }            
            };

            // go to Previous selection on click
            $scope.Prev = function(){
              $scope.theArray = $scope.Array;
              $scope.Items = $scope.Array[--$scope.index];
              if($scope.Items === undefined){
                return;
              }else{
               $scope.title = $scope.Items.name;
                $scope.description = $scope.Items.description;  
                $scope.thumb = $scope.Items.image;
              }            
            };

          },
          size: 'md',
          keyboard: true
        });
      }
    };

  }]);


         