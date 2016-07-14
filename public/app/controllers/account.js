'use strict';

angular
  .module('app')
  .controller('AccountController', AccountController);

function AccountController($translate, UserService, Notification) {

  var Account = this;

  Account.user = {
    name: 'bacetoni',
    email: 'email@gbg.com',
    password: 'bumba'
  };

  Account.editProfile = function(user){
    UserService.update(user, function (res) {
      Account.user = res;
      $translate(['ACCOUNT-EDITED']).then(function (translations) {
        Notification.warning(translations['ACCOUNT-EDITED'] + user.name);
      });
    });
  };

  UserService.find('5785c3a48b865b7834fd42c4', function (res) {
    Account.user = res;
  });

}
