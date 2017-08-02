var app = angular.module('myApp');

app.config(function ($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: '/partials/login.html',
            controller: 'ctrl01'
        })
        .when('/profile', {
            templateUrl: '/partials/profile.html',
            controller: 'ctrl02'
        })
        .otherwise({
            redirectTo: '/login'
        });

})
