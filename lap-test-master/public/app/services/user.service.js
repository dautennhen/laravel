(function () {
    'use strict';

    angular.module('RowBoat.services')
        .factory('userService', userService);

    userService.$inject = ['$http'];

    function userService($http) {
        return {
            addUser: addUser,
            getAllUser: getAllUser,
            getUserById: getUserById
        };


        function addUser(detail) {
            return $http({
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                url: 'api/1.0/project-manager/item/new/user',
                data:$.param(detail)
            })
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getPeople')(e);
            }
        }

        function getAllUser() {
            return $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                url: 'api/1.0/project-manager/list/users'
            })
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getPeople')(e);
            }
        }

        function getUserById(idkey) {
            return $http({
                method: 'GET',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                url: 'api/1.0/project-manager/list/users'
            })
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getPeople')(e);
            }
        }
    }


})();