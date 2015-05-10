(function (){
	'use strict';

	// Specific Config database connect
	exports.mongoose = require('mongoose').connect('mongodb://localhost/challenge');
}).call(this);