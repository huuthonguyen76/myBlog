(function (){
	'use strict';

	// Initialize app
	var express 				= require('express');
	var app 						= new express();
	var authHelper			= require('./helpers/auth.helper.js');

	// Include controller
	var userController 		= require('./modules/user/controllers/user.controller.js');
	var postController 		= require('./modules/post/controllers/post.controller.js');

	// Import requirement for server
	var bodyParser 						= require('body-parser');
	var connectionMultipart 	= require('connect-multiparty');

	// Server Config
	app.listen(5440);
	app.use(bodyParser.json()); 	      // to support JSON-encoded bodies
	app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
		extended: true
	}));
	app.use(connectionMultipart({}));
	app.set('secret', 'verylonnnnnnnnnnnngsecret');

	// Set header config
	app.use(function (req, res, next) {
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
		res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
		res.setHeader('Access-Control-Allow-Credentials', true);
		next();
	});

	// Class member router
	app.post('/user/login', userController.login);
	app.post('/user/register', userController.register);
	app.post('/post/addPost', authHelper.loginRequire, postController.addPost);
	app.post('/post/listPost', postController.listPost);
}).call(this);