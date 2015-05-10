(function() {
	'use strict';

	// Init require modules
	var mongoose 		= require('../configs/database.config.js').mongoose;
	var schema 			= mongoose.Schema;

	// Class Member Schema.
	var postSchema = new schema({
		author			: {type: schema.Types.ObjectId, ref: 'userModel', require: true},
		title				: {type: String, require: true},
		content			: {type: String, require: true},
		created_at	: {type: Date, default: new Date()},
		updated_at	: Date,
		deleted			: {type: Number, default: 0},
		deleted_at	: Date
	}, {collection	: 'posts'});

	exports.postModel = mongoose.model('postModel', postSchema);
}).call(this);