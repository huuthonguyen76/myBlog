(function() {
  'use strict';

  angular.module('service.factory', [])
    .factory('myApiCall', ['$http', '$rootScope', '$q', function($http, $rootScope, $q) {

      /**
       *
       * Request server to get response
       *
       * @param: {string} url to request
       * @param: {string} method for request
       * @param: {object} data for post request
       * @param: {object} data for get request
       * 
       * @return: {array|object}  data response as promise
       *
       */
      var request = function(url, method, data, params) {     
        var host = 'http://localhost:5440';

        // Checking params
        url    = (typeof url !== 'undefined') ? url : '';
        method = (typeof method !== 'undefined') ? method : 'post';
        data   = (typeof data !== 'undefined') ? data : {};
        params = (typeof params !== 'undefined') ? params : {};

        var deferred = $q.defer();
        var promise = $http({
          method: method,
          url: url ? host + '/' + url : host, 
          params: params, // for get
          data: data // for post
        });
        
        // Resolve data
        promise
          .success(function(response) {
            deferred.resolve(response);
          })
          .error(function(msg, code) {
            deferred.reject({
              msg: msg,
              code: code
            });
          })
        ;

        // Return promise
        return deferred.promise;
      };
      return {
        request: request
      };
    }])
  ;
}).call(this);