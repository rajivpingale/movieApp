/**
 * User Serives 
 * Gets user related data
 */
'use strict';
angular.module("myApp")
    .service("userService",["$http",function($http){
        var user = {};
        
        this.getUsers = function()
        {
            //Gets all user's data
            return $http.get("../data/customers.json").then(function(res){
               return res.data; 
            });
        }
        
        return this;
    }])