'use strict';

angular
  .module('app')
  .directive('gallery', function(){
    return {
      restrict: 'A',
      controller: ['$scope', '$http', function($scope, $http) {
        $scope._Index = 0;

        // if a current image is the same as requested image
        $scope.isActive = function (index) {
          return $scope._Index === index;
        };

        // show prev image
        $scope.showPrev = function () {
          console.log(1);
          $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.files.length - 1;
        };

        // show next image
        $scope.showNext = function () {
          $scope._Index = ($scope._Index < $scope.files.length - 1) ? ++$scope._Index : 0;
        };
      }]
    };
  });