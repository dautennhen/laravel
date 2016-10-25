(function () {
  'use strict';

  angular
    .module('app.user')
    .controller('UserController', UserController);

  UserController.$inject = ['$q', 'dataservice', 'logger', 'config'];
  /* @ngInject */
  function UserController($q, dataservice, logger, config) {
    var vm = this;
    vm.title = 'User';
    vm.smartTablePageSize = config.pageSize;
    vm.smartTablePageSize = 12;

    activate();

    function activate() {
      var promises = [getAllUser()];
      return $q.all(promises).then(function () {
        logger.info('Activated Dashboard View');
      });
    }

    function getAllUser() {
      return dataservice.getAllUser().then(function (data) {
        vm.users = data;
        // for (var i = 0; i < 20; i++) {
        //   vm.users.push($.extend(true, {}, data[0]));
        // }
        return vm.users;
      });
    }

  }
})();
