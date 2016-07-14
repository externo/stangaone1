'use strict';

angular
  .module('app')
  .factory('FileService', FileService);

function FileService($http, baseUrl) {

  return {
    findAll: findAll,
    upload: upload,
    remove: remove
  };

  function findAll(callback) {
    $http.get(baseUrl + '/file')
      .success(callback);
  }

  function upload(fileData, options, callback) {
    $http.post(baseUrl + '/file', fileData, options)
      .success(callback);
  }

  function remove(id, callback) {
    $http.delete(baseUrl + '/file/' + id)
      .success(callback);
  }
}