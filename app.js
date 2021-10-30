const dragonApp = angular.module('dragonApp', []);

dragonApp.controller('mainController', ['$scope', function ($scope) {
    console.log($scope);
}]);

const createDragon = function(size, wings, type){
    return 'Scaly lizard';
}

console.log(angular.injector().annotate(createDragon));