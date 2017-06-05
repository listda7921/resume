app.controller('View1Ctrl', function($scope, $document) {
  $scope.text = 'more';
  $scope.text2 = 'more';
  $scope.text3 = 'more';
  $scope.text4 = 'more';
  $scope.num = 60;
  $scope.scroll = function(position) {
    var duration = 700;
    var offset = 0;
    var element = angular.element(document.getElementById(position));
    $document.scrollTo(element, offset, duration);
  }

  $scope.skills = [
    'C#',
    'Javascript',
    'Angular Js',
    'Angular 2',
    'HTML5',
    'CSS3',
    'Bower',
    'Npm',
    'AWS',
    'JQuery',
    'Bootstrap',
    'ASP.NET',
    'LINQ',
    'SQL',
    'Node.js',
    'Ionic Framework',
    'Git',
  ];
  $scope.filteredSkills = $scope.skills;
  $scope.skillChange = function(skill) {
    if (skill === true) {
      $scope.filteredSkills = [];
      $scope.skills.forEach(function(skill) {
        if (skill === 'C#' || skill === 'Javascript' || skill === 'Angular Js' || skill === 'HTML5' || skill === 'CSS3') {
          $scope.filteredSkills.push(skill);
        }
      })
    } else if (skill === false) {
      $scope.filteredSkills = $scope.skills;
    }
  }
  $scope.skillChange(false);

});
