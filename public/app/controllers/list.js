'use strict';

angular
  .module('app')
  .controller('ListController', ListController);

function ListController($translate, ClientService, Notification) {

  var List = this;

  List.addClient = function (client) {
    if (client){
      ClientService.create(client, function (response) {
        List.clients = response;
        $translate(['CLIENT-ADDED']).then(function (translations) {
          Notification.primary(translations['CLIENT-ADDED'] + client.name);
        });
      });
    }
  };

  List.removeClient = function (client) {
    ClientService.remove(client._id, function (response) {
      List.clients = response;
      $translate(['CLIENT-REMOVED']).then(function (translations) {
        Notification.error(client.name + translations['CLIENT-REMOVED']);
      });
    });
  };

  ClientService.findAll(function (response) {
    var length = response.length;
    if (length) {
      if(length == 1){
        $translate(['CLIENT-ONE']).then(function (translations) {
          Notification.info(translations['CLIENT-ONE']);
        });
      }else {
        $translate(['CLIENT-YES']).then(function (translations) {
          Notification.info(length + translations['CLIENT-YES']);
        });
      }
    } else {
      $translate(['CLIENT-NO']).then(function (translations) {
        Notification.info(translations['CLIENT-NO']);
      });
    }
    List.clients = response;
  });

}
