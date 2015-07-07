(function (){
	'use strict';

	// Specific Config database connect
	exports.mongoose = require('mongoose').connect('mongodb://127.0.0.1/blog');
}).call(this);
