(function() {
	'use strict';

	// Include require module
	var userModel = require('../../../models/user.model.js').userModel;
	var postModel = require('../../../models/post.model.js').postModel;
	var errorMsg	= require('../../../configs/message-code.config.js').errorMsg;
	var myRedis		= new require('../../../core/my.redis.js')();
	var async			= require('async');
	var jwt				= require('jwt-simple');

	exports.addPost = function(req, res) {

		// Init condition for user login
		var post = {
			title		: typeof req.body.title === 'string' ? req.body.title : '',
			content	: typeof req.body.content === 'string' ? req.body.content : '',
		};

		async.waterfall([
			function(next) {
				var user = req.my.user;
				postModel.create({
					author	: user._id,
					title		: post.title,
					content	: post.content
				}, next);
			}
		], function(err, post) {
			if (err) {
				res.json(500, {})
			} else {
				res.json(post);
			}
		});
	}
	exports.listPost = function(req, res) {
		async.waterfall([
			function(next) {
				postModel.find().populate('author').sort('-_id').exec(next);
			}
		], function(err, posts) {
			if (err) {
				res.json(500, {});
			} else {
				res.json(posts);
			}
		});
	}
}).call(this);