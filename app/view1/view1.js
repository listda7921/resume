app.controller('View1Ctrl', function($scope,$document) {

  $scope.scroll = function(position){
    var duration = 700;
    var offset = 0;
    var element = angular.element(document.getElementById(position));
    $document.scrollTo(element, offset, duration);
  }
});
