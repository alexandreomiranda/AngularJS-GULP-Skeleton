(function () {
    'use strict';
    angular.module('app').controller('AuthCtrl', AuthCtrl);

    AuthCtrl.$inject = ['$scope'];

    function AuthCtrl($scope) {
        var vm = this; 
        vm.user = {};
    }

})();