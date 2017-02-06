'use strict';

describe('user app', function() {
    var element, scope;
    
    beforeEach(function () {
        module('myApp');
        module('templates');
        
        element = angular.element('<user-item user="user"/>');
    	
    });
    it('should check if the age of user is `18`', function () {
        
        inject(function ($rootScope, $compile) {
            scope = $rootScope.$new();
			scope.user = {
                "first_name":"Diane",
                "last_name":"Tucker",
                "date_of_brith":"1999-07-07T21:26:05Z"
            };
            
			$compile(element)(scope);
			scope.$digest();
		});
        
        //Directive Calculates the age of each user
        var age = scope.user.age;
        expect(age).toEqual(18);
    });
    
    it('should check if the age of user is `18`', function () {
        
        inject(function ($rootScope, $compile) {
            scope = $rootScope.$new();
			scope.user = {
                "first_name":"Diane",
                "last_name":"Tucker",
                "date_of_brith":"2001-07-07T21:26:05Z"
            };
            
			$compile(element)(scope);
			scope.$digest();
		});
        
        //Directive Calculates the age of each user
        var age = scope.user.age;
        expect(age).toEqual(18);
    });

});