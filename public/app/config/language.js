(function () {

  'use strict';

  angular.module('app')
    .config([
      '$translateProvider',
      function ($translateProvider) {
        $translateProvider
          .translations('en', {
            'LANG-CODE': 'Превключете на БГ',
            'LANG-MESSAGE': 'Your language now is English',
            'HOME': 'Home',
            'LIST': 'List',
            'IMAGE-ADDED': 'New image is added',
            'IMAGE-REMOVED': 'Image is removed',
            'IMAGE-NO': 'There is no image to load.',
            'IMAGE-ONE': 'One image is loaded',
            'IMAGE-YES': ' images are loaded',
            'CLIENT-NAME': 'Name',
            'CLIENT-DESCRIPTION': 'Description',
            'CLIENT-QUANTITY': 'Quantity',
            'CLIENT-BUTTON': 'Add client',
            'CLIENT-ADDED': 'New client is added ',
            'CLIENT-REMOVED': ' client is removed',
            'CLIENT-NO': 'There is no client to load',
            'CLIENT-ONE': 'One client is loaded. Click to column titles to sort',
            'CLIENT-YES': ' clients are loaded. Click to column titles to sort',
            'ACCOUNT': 'Account',
            'ACCOUNT-EDITED': 'Your profile information is updated ',
            'EDIT-BUTTON': 'Edit profile',
            'NAME': 'Name',
            'EMAIL': 'E-mail',
            'PASSWORD': 'Password',
            'SUBSCRIBE': 'Subscribe for newsletters',
            'REQUIRED-FIELD': 'This field is required'
          })
          .translations('bg', {
            'LANG-CODE': 'Switch to EN',
            'LANG-MESSAGE': 'Сменихте езика на Български',
            'HOME': 'Начало',
            'LIST': 'Списък',
            'IMAGE-ADDED': 'Добавихте нова снимка',
            'IMAGE-REMOVED': 'Изтрихте снимка',
            'IMAGE-NO': 'Няма качени снимки.',
            'IMAGE-ONE': 'Една снимка е заредена',
            'IMAGE-YES': ' снимки са заредени',
            'CLIENT-NAME': 'Име',
            'CLIENT-DESCRIPTION': 'Описание',
            'CLIENT-QUANTITY': 'Количество',
            'CLIENT-BUTTON': 'Добави клиент',
            'CLIENT-ADDED': 'Добавихте нов клиент ',
            'CLIENT-REMOVED': ' е изтрит',
            'CLIENT-NO': 'Няма добавени клиенти.',
            'CLIENT-ONE': 'Един клиент е зареден. Кликнете върху заглавията на колоните за да сортирате',
            'CLIENT-YES': ' клиента са заредени. Кликнете върху заглавията на колоните за да сортирате',
            'ACCOUNT': 'Акаунт',
            'ACCOUNT-EDITED': 'Редактирахте информацията в профила си ',
            'EDIT-BUTTON': 'Редактирай профила',
            'NAME': 'Име',
            'EMAIL': 'Поща',
            'PASSWORD': 'Парола',
            'SUBSCRIBE': 'Запиши се за бюлетин',
            'REQUIRED-FIELD': 'Това поле е задължително'
          })
          //.determinePreferredLanguage()
          //.preferredLanguage('en')
          .useSanitizeValueStrategy(null);
      }
    ]);

}());
