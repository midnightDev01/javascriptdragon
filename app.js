const dragonApp = angular.module('dragonApp', []);

dragonApp.controller('mainController', ['$scope', '$log', '$filter', '$timeout', ($scope, $log, $filter, $timeout) => {
    $log.log("Log service");

    $scope.dragon = 'Varanus komodoensis';
    $scope.formattedString = $filter('uppercase')($scope.dragon);
    $scope.handle = '';
    $scope.lowercasehandle = function(){
        return $filter('lowercase')($scope.handle);
    }

    $log.info($scope.dragon);
    $log.info($scope.formattedString);

    $scope.$watch('handle', function (newValue, oldValue){
        console.log('Changed!');
        console.log('Old:' + oldValue);
        console.log('New:' + newValue);
    });

    $timeout(function(){
        $scope.handle = 'Fanged teeth';
        console.log('Scope changed!');
    }, 3000)

}]);

const createDragon = function(size, wings, type){
    return 'Scaly lizard';
}

console.log(angular.injector().annotate(createDragon));