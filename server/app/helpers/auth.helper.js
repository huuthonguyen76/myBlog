(function() {
  'use strict';

  var myRedis     = new require('../core/my.redis.js')();
  var errorMsg    = require('../configs/message-code.config.js').errorMsg;

  // Function to declare user login or not
  // In this application. We use token to declare user's session 
  var loginRequire = function(req, res, next) {
    if ( ! req.body.token) {
      res.json(500, {});
      next(errorMsg.notLogin);
    } else {
      myRedis.get(req.body.token, function(err, user) {
        if (err) {
          next(err);
        } else {

          // After user login. We better store user data in req.my for later using.
          user = JSON.parse(user);
          if ( ! user._id) {
            res.json(500, {});
            next(errorMsg.notLogin);
          } else {
            if (typeof req.my === 'undefined') {
              req.my = {user: user};
            }
            next();
          }
        }
      })
    }
  }

  exports.loginRequire = loginRequire;
}).call(this);