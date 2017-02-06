'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  
  $routeProvider.when("/",{
      templateUrl : "views/users.html",
      controller : "userController"
  });
    
  $routeProvider.otherwise({redirectTo: '/'});

}]).
filter("showFullName",function(){
    return function(user){
        return user ? user.first_name+' '+user.last_name : "No Name Selected";
    };
})