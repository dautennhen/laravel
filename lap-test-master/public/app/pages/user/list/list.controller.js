(function () {
    'use strict';
    angular.module('RowBoat.pages.user.list')
        .controller('ListUserController', ListUserController);

    ListUserController.$inject = ['$scope', '$timeout', 'userService'];

    function ListUserController($scope, $timeout, userService) {
        var vm = this;

        vm.smartTablePageSize = 10;

        loadAllUser();

        function loadAllUser() {
            return userService.getAllUser()
                .then(function (data) {
                    vm.users = data;
                });
        }
    }
})();