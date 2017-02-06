'use strict';
angular.module("myApp")
    .directive("userItem",[function(){
        return {
            restrict : "EA",
            templateUrl : "views/directives/user-item.html",
            scope : {
                user : "="
            },
            link : function(scope,element,attr)
            {
                //Get User's Age
                var getUserAge = function()
                {
                    var today = new Date();
                    var birthDate = new Date(scope.user.date_of_brith);
                    var age = today - birthDate;
        
                    age = Math.round(age / (1000 * 60 * 60 * 24 * 365));
        
                    scope.user.age = age;
                };
                
                getUserAge();
                
            }
        };
    }]);