(function() {
	'use strict';

	// Include require module
	var categoryModel  = require('../../../models/category.model.js').categoryModel;
	var errorMsg	     = require('../../../configs/message-code.config.js').errorMsg;
	var myRedis		     = new require('../../../core/my.redis.js')();
	var async			     = require('async');
	var jwt				     = require('jwt-simple');

	exports.addCategory = function(req, res) {

		// Init condition for user login
		var category = {
			title		: typeof req.body.title === 'string' ? req.body.title : '',
		};

		async.waterfall([
			function(next) {
				categoryModel.create({
					title		: category.title
				}, next);
			}
		], function(err, category) {
			if (err) {
				res.json(500, {})
			} else {
				res.json(category);
			}
		});
	}

	exports.listCategory = function(req, res) {

		// Init condition for user login
		async.waterfall([
			function(next) {
				categoryModel.find().sort('-_id').exec(next);
			}
		], function(err, categories) {
			if (err) {
				res.json(500, {});
			} else {
				res.json(categories);
			}
		});
	}

	exports.removeCategory = function(req, res) {

		async.waterfall([
			function(next) {
				var categoryId = req.body.categoryId;
				categoryModel.remove({_id: req.body.categoryId}, next);
			}
		], function(err) {
			if (err) {
				res.json(500, {});
			} else {
				res.json();
			}
		});
	}
}).call(this);
