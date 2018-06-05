'use strict';

angular.module('carList'),
    component('carList', {
   // template: "<div class=''><h1 class= 'new-class' > {{ title }}</h1><button ng-click='someClickTest()'>Click me!</button></div>",
    templateUrl: '/template/car-list.html',
        controller: function($scope){
            $scope.title = 'Hi there'
            $scope.get = 0
            $scope.someClickTest = function () {
            console.log("clicked")
            $scope.clicks += 1
            $scope.title = 'Clicked ' + $scope.clicks + ' times'
            }
        }
    });

    // controller('CarListController', function($scope){
    //     console.log("hello")
    //     $scope.title = 'Hi there'
    //     $scope.get = 0
    //     $scope.someClickTest = function(){
    //         console.log("clicked")
    //         $scope.clicks += 1
    //         $scope.title = 'Clicked ' + $scope.clicks + ' times'
    //     }
    // }
    // });

    // component('carList');