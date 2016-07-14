'use strict';

angular
  .module('app')
  .controller('MainController', MainController);

function MainController($translate, Notification) {

  var Main = this;

  Main.lang = 'en';

  $translate.use('en');

  Main.toggleLang = function () {

    if ($translate.use() == 'en') {
      $translate.use('bg');
    } else {
      $translate.use('en');
    }

    $translate(['LANG-CODE', 'LANG-MESSAGE']).then(function (translations) {
      Main.lang = translations['LANG-CODE'];
      Notification.primary(translations['LANG-MESSAGE']);
    });

  };

}
