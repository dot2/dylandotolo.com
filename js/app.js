var dotolo = angular.app('dotolo', []);

//Routing for pages
dotolo.config(function($routeProvider){
    $routeProvider.when("/"),
    {
        templateUrl: 'pages/home.html'
    };
});
