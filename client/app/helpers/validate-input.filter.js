(function() {
  'use strict';

  angular.module('validate-input.filter', [])

    // Checking input empty or not
    .filter('isEmpty', [function() {
      return function(input) {
      	if (input.trim() == '') {
      		return true;
      	} else {
      		return false;
      	}
      }
    }])

    // Checking input over length or not
    .filter('isValidLength', [function() {
    	return function(input, length) {
    		if (input.length <= length) {
    			return true;
    		} else {
    			return false;
    		}
    	}
    }])

    // Checking input is number
    .filter('isNumber', [function() {
      return function(input) {
        if (input == '') {
          return false;
        }

        var patt    = new RegExp('^[0-9]*$');
        var result  = patt.exec(input);

        if (result == null) {
          return false;
        } else {
          return true;
        } 
        
      }
    }])

    /**
     *
     * Checking input has any char in list've given
     *
     * @param: {string} input to check
     * @param: {array} list of character to check
     *
     * @return: {boolean}
     *
     * Example: 
     * _ isCharInList('abc', ['a', 'b', 'c']) --> true
     * _ isCharInList('abc', ['o']) ---> false
     *
     */
    .filter('isCharInList', [function() {
      return function(input, list) {

        var charPatt = [];
        for (var character in list) {
          charPatt.push(list[character]);
        }
        charPatt = charPatt.join('');

        var patt = new RegExp('[' + charPatt + ']');
        var result = patt.exec(input);

        if (result == null) {
          return false;
        } else {
          return true;
        }
      }
    }])
  ;
}).call(this);