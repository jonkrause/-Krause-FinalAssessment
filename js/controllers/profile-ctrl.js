// Add module and controller here.
var app = angular.module('myApp');

app.controller('ctrl02', function($scope, loginService){


loginService.getProfile();
    
    console.log('ok')



})