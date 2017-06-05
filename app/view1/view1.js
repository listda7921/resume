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
  {
  	skill: 'C#',
  	value: 4
  },
  {
  	skill: 'Javascript',
  	value: 4
  },
  {
  	skill: 'Angular Js',
  	value: 4
  },
  {
  	skill: 'Angular 2',
  	value: 3
  },
  {
  	skill: 'HTML5',
  	value: 5
  },
  {
  	skill: 'CSS3',
  	value: 4
  },
  {
  	skill: 'Bower/Npm',
  	value: 5
  },
  {
  	skill: 'AWS',
  	value: 2
  },
  {
  	skill: 'JQuery',
  	value: 3
  },
  {
  	skill: 'Bootstrap',
  	value: 4
  },
  {
  	skill: 'ASP.NET',
  	value: 3
  },
  {
  	skill: 'LINQ',
  	value: 3
  },
  {
  	skill: 'SQL',
  	value: 2
  },
  {
  	skill: 'Node.js',
  	value: 4
  },
  {
  	skill: 'Ionic Framework',
  	value: 4
  },
  {
  	skill: 'Git',
  	value: 5
  }
  ];
  $scope.sort = function(val){
  	if(val == true){
  $scope.skills = $scope.skills.sort(function(a,b){
  	return b.value - a.value;
  });
}
  else{
  	$scope.skills = $scope.skills.sort(function(a,b){
  	return b.skill - a.skill;
  });
  }

  }
  // $scope.filteredSkills = $scope.skills;
  // $scope.skillChange = function(skill) {
  //   if (skill === true) {
  //     $scope.filteredSkills = [];
  //     $scope.skills.forEach(function(skill) {
  //       if (skill === 'C#' || skill === 'Javascript' || skill === 'Angular Js' || skill === 'HTML5' || skill === 'CSS3') {
  //         $scope.filteredSkills.push(skill);
  //       }
  //     })
  //   } else if (skill === false) {
  //     $scope.filteredSkills = $scope.skills;
  //   }
  // }
  // $scope.skillChange(false);

});
