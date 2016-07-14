angular.module('app')
  .directive('sliderDirective', function () {
    return {
      restrict: 'E', // applied on 'element'
      transclude: true, // re-use the inner HTML of the directive
      template: '<section ng-transclude></section>', // need this so that the inner HTML can be re-used
      link: function (scope, elem, attrs) {
        var dotsContainer = elem.find('dots');

        scope.slides = elem.find('article');

        angular.forEach(scope.slides, function (slide, key) {
          angular.element(dotsContainer).append(angular.element("<dot/>"));
        });

        scope.dots = elem.find('dot');
      },
      controller: ['$scope', function ($scope) {
        // Initially the index is at the first slide
        $scope.currentIndex = 0;

        // Next slide function
        $scope.next = function () {
          $scope.currentIndex < $scope.slides.length - 1 ? $scope.currentIndex++ : $scope.currentIndex = 0;
        };

        // Previous slide function
        $scope.prev = function () {
          $scope.currentIndex > 0 ? $scope.currentIndex-- : $scope.currentIndex = $scope.slides.length - 1;
        };

        // Watch for slide change through currentIndex
        $scope.$watch('currentIndex', function () {
          angular.forEach($scope.slides, function (slide, key) {
            angular.element(slide).addClass('hidden');
            angular.element($scope.dots[key]).removeClass('active');
          });

          angular.element($scope.slides[$scope.currentIndex]).removeClass('hidden');
          angular.element($scope.dots[$scope.currentIndex]).addClass('active');
        })
      }]
    }
  });

