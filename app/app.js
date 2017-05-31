var app = angular.module('myApp', [
  'ngRoute',
  'ngMaterial',
  'duScroll',
  'ui.bootstrap'
])

app.config(function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('');
  $routeProvider
  .when("/",{
    templateUrl: "/view1/view1.html",
    controller: 'View1Ctrl'
  })
  .when("/resume",{
    templateUrl: "/view1/view1.html",
    controller: 'View1Ctrl'
  })
  .when("/view2",{
    templateUrl: "/view2/view2.html",
    controller: 'View2Ctrl'
  })
  .otherwise({redirectTo: '/'})

})
