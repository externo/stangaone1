'use strict';

angular
  .module('app')
  .factory('UserService', UserService);

function UserService($http, baseUrl) {

  return {
    find: find,
    update: update
  };

  function find(id, callback) {
    $http.get(baseUrl + '/user/' + id)
      .success(callback);
  }

  function update(currentUser, callback) {
    $http.put(baseUrl + '/user/' + currentUser._id, currentUser)
      .success(callback);
  }

}