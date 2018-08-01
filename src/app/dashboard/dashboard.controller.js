(function () {
    'use strict';
    angular.module('app').controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['$scope'];

    function DashboardCtrl($scope) {
        var vm = this; 
        $scope.text = 'binded info';
    };

})();
