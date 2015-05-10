(function() {
	'use strict';

	exports.ignoreWhiteSpace = function(string) {
		var stringWithoutSpace = '';
		var words = string.split(' ');
    for (var word in words) {
      if (word) {
        stringWithoutSpace += words[word];
      }
    }
    return stringWithoutSpace;
	}
}).call(this);