(function() {
	'use strict';

	// Init require modules
	var mongoose 		= require('../configs/database.config.js').mongoose;
	var schema 			= mongoose.Schema;

	// Class Member Schema.
	var userSchema = new schema({
		username		: {type: String, default: '', unique: true, index: true},
		password		: {type: String, default: ''},
		created_at	: {type: Date, default: new Date()},
		updated_at	: Date,
		deleted			: {type: Number, default: 0},
		deleted_at	: Date
	}, {collection	: 'users'});

	exports.userModel = mongoose.model('userModel', userSchema);
}).call(this);