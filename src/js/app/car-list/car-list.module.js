Var CarApp = angular.module('CarApp', ['ngResource'])

CarApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {controller: ListController, templateUrl: 'partials/list.html'})
        .when('/edit/:id', {controller: EditController, templateUrl: 'partials/details.html'})
        .otherwise({redirectTo: '/'})
})

CarApp.factory('CarsService', function($resource) {
    return $resource('/api/cars/:id', {id: '@id'}, {update: {method: 'PUT'}})
})

function ListController ($scope, CarsService) {
    var index = -1;

    $scope.cars = CarsService.query()

    $scope.index = index; //currently selected element
    $scope.selectedId = -1; //actual id of selected car

    $scope.select = function(i) {
        $scope.index = index
        index = i
        $scope.selectedId = $scope.cars[index].id
    }

    $scope.delete = function() {
        if (index >= 0) {
            CarsService.delete({id: $scope.cars[index].id})
            $scope.cars.splice(index, 1)
        }
    }
}

function EditController ($scope, $location, $routeParams, CarsService) {
    var id = $routeParams
}