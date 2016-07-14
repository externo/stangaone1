'use strict';

angular
  .module('app')
  .controller('HomeController', function ($scope, $translate, baseUrl, FileService, Notification) {

    var Home = this;

    Home.baseUrl = baseUrl;

    Home.uploadImage = function () {
      var file = Home.newImage;
      var fileData = new FormData();
      fileData.append('file', file);
      var options = {
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined}
      };

      FileService.upload(fileData, options, function (response) {
        FileService.findAll(function (response) {
          $scope.files = response;
        });
        $translate(['IMAGE-ADDED']).then(function (translations) {
          Notification.primary(translations['IMAGE-ADDED']);
        });
      });
    };

    Home.removeImage = function (id) {
      FileService.remove(id, function (response) {
        $scope.files = response;
        $translate(['IMAGE-REMOVED']).then(function (translations) {
          Notification.error(translations['IMAGE-REMOVED']);
        });
      });
    };

    FileService.findAll(function (response) {
      var length = response.length;
      if (length) {
        if(length == 1){
          $translate(['IMAGE-ONE']).then(function (translations) {
            Notification.info(translations['IMAGE-ONE']);
          });
        }else {
          $translate(['IMAGE-YES']).then(function (translations) {
            Notification.info(length + translations['IMAGE-YES']);
          });
        }
      } else {
        $translate(['IMAGE-NO']).then(function (translations) {
          Notification.info(translations['IMAGE-NO']);
        });
      }
      $scope.files = response;
    });

  });