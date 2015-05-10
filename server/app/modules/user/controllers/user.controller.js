(function() {
	'use strict';

	// Include require module
	var userModel = require('../../../models/user.model.js').userModel;
	var errorMsg	= require('../../../configs/message-code.config.js').errorMsg;
	var myRedis		= new require('../../../core/my.redis.js')();
	var async			= require('async');
	var jwt				= require('jwt-simple');

	exports.login = function(req, res) {

		// Init condition for user login
		var condition = {
			username: typeof req.body.username === 'string' ? req.body.username : '',
			password: typeof req.body.password === 'string' ? req.body.password : ''
		};

		async.waterfall([
			function(next) {
				if ( ! condition.username || ! condition.password) {
					next(errorMsg.inputNotValid);
				} else {
					userModel.findOne(condition, next);
				}
			}
		], function(err, user) {
			if ( ! user || err) {
				res.json(500, {});
			} else {

				// Generate token for user's authentication and save data to cache
				var token = jwt.encode({
					userId: user._id,
					timestamp: Date.now()
				}, req.app.get('secret'));
				myRedis.set(token, user);

				res.json({
					user  : user,
					token	: token
				});
			}
		});
	}

	exports.register = function(req, res) {

		// Init condition for user login
		var user = {
			username: typeof req.body.username === 'string' ? req.body.username : '',
			password: typeof req.body.password === 'string' ? req.body.password : ''
		};

		async.waterfall([
			function(next) {
				if ( ! user.username || ! user.password) {
					next(errorMsg.inputNotValid);
				} else {
					userModel.create(user, next); 
				}
			}
		], function(err, user) {
			if (err || ! user) {
				res.json(500, {});
			} else {
				res.json(user);
			}
		});
	}
}).call(this);