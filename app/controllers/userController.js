/**
 * User Controller 
 * 
 */
'use strict';
angular.module("myApp")
    .controller("userController",["userService","$scope",function(userService,$scope){
        $scope.users = {};
        
        userService.getUsers().then(function(data){
            $scope.users = data;
        });
        
        $scope.selectUser = function(user)
        {
            $scope.selectedUser = angular.copy(user);
            
            //Validate User's age
            $scope.userForm.userAge.$setValidity("age",true);
            if($scope.selectedUser.age < 18)
            {
                $scope.userForm.userAge.$setValidity("age",false);
            }
        }
        
    }])