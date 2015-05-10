(function() {
  'use strict';

  angular.module('utilities.factory', [])

    // Custom localStorage --> myStorage with time expire feature
    .factory('myStorage', [function() {

      /**
       *
       * Set local storage for storing data instead of cookie
       *
       * @param: {string} name of storage
       * @param: {object} storage's data
       * 
       */
      var set = function(name, data) {

        // Checking params
        name = (typeof name !== 'undefined') ? name : '';
        data = (typeof data !== 'undefined') ? data : {};
        
        var timeStorage = new Date().getTime();
        
        // Parse data + time into object
        localStorage.setItem(name, JSON.stringify({
          data: data,
          time: timeStorage
        }));
      }

      /**
       *
       * Get local storage
       *
       * @param: {string} name of storage
       * 
       * @return: {object} respective data
       */
      var get = function(name) {

        // Checking params
        name = (typeof name !== 'undefined') ? name : '';

        var timeExpire  = 3000; // 5 minutes
        var timeCurrent = new Date().getTime();
        
        // Get data from storage
        var storage = JSON.parse(localStorage.getItem(name));

        if (storage == null) {
          return null;
        }
        else {

          // Caculate base on second not milisecond
          return Math.round((timeCurrent - storage.time) / 1000) < timeExpire ? storage.data : null;
        }
      }

      /**
       *
       * Remove local storage
       *
       * @param: {string} name of storage
       * 
       */
      var remove = function(name) {
        localStorage.removeItem(name);
      }
      return {
        set: set,
        get: get,
        remove: remove
      }
    }])    
  ;
}).call(this);