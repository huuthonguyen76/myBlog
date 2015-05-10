(function() {
  'use strict';
  angular.module('common.factories', [])

    /**
     * Object utilities
     *
     * Useful object's function for handling object 
     *
     */
    .factory('objectUtilities', [function() {

      /**
       * Clone Object
       *
       * @param  {array|object} will be clone
       * @return {array|object} cloned
       */
      var cloneObject = function(object) {
        return JSON.parse(JSON.stringify(object));
      }

      /**
       * Checking is array type
       *
       * @param  {array} 
       * @return {boolean}
       */
      var isArray = function(array) {
        if (array instanceof Array) {
          return true;
        } else {
          return false;
        }
      }

      /**
       * Checking array is empty
       *
       * @param  {array} 
       * @return {boolean} array is empty --> true, array not empty --> false
       */
      var isArrayEmpty = function(array) {
        if ( ! array || array.length <= 0) {
          return true;
        } else {
          return false;
        }
      }

      /**
       * Checking object is empty
       *
       * @param  {object} 
       * @return {boolean} object is empty --> true, object not empty --> false
       */
      var isObjectEmpty = function(object) {

        // Flag for checking empty
        var isEmpty = true;

        // Traverse element in object, if object has no element --> empty
        for (var key in object) {
          isEmpty = false;
        }

        return isEmpty;
      }

      return {
        'cloneObject'   : cloneObject,
        'isArray'       : isArray,
        'isArrayEmpty'  : isArrayEmpty,
        'isObjectEmpty' : isObjectEmpty
      }
    }]);
})();