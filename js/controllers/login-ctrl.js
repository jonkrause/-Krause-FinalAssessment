// Add module and controller here.
var app = angular.module('myApp');

app.controller('ctrl01', function($scope, loginService){
    console.log('test')
    
    $scope.submit = function(username, password){
        loginService.checkLogin(username, password)
        
        

    }
    
    
    
    
    
    
    
})