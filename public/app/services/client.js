'use strict';

angular
  .module('app')
  .factory('ClientService', ClientService);

function ClientService($http, baseUrl) {

  return {
    create: create,
    remove: remove,
    findAll: findAll
  };

  function create(client, callback) {
    $http.post(baseUrl + '/client', client)
      .success(callback);
  }

  function remove(id, callback) {
    $http.delete(baseUrl + '/client/' + id)
      .success(callback);
  }

  function findAll(callback) {
    $http.get(baseUrl + '/client')
      .success(callback);
  }
}