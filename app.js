const dragonApp = angular.module('dragonApp', []);

dragonApp.controller('mainController', ['$scope', '$log', '$filter', ($scope, $log, $filter) => {
    $log.log("Log service");

    $scope.dragon = 'Varanus komodoensis';
    $scope.formattedString = $filter('uppercase')($scope.dragon);
    $scope.handle = '';
    $scope.lowercasehandle = function(){
        return $filter('lowercase')($scope.handle);
    }

    $log.info($scope.dragon);
    $log.info($scope.formattedString);

}]);

const createDragon = function(size, wings, type){
    return 'Scaly lizard';
}

console.log(angular.injector().annotate(createDragon));