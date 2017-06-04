app.controller('View1Ctrl', function($scope, $document) {
  $scope.text = 'more';
  $scope.text2 = 'more';
  $scope.text3 = 'more';
  $scope.text4 = 'more';
  $scope.scroll = function(position) {
    var duration = 700;
    var offset = 0;
    var element = angular.element(document.getElementById(position));
    $document.scrollTo(element, offset, duration);
  }
});
