(function() {
  'use strict';

  var redis       = require('redis');
  var redisClient = redis.createClient();
  var defaultTTL  = 3000; // defaultTTL: time to live of cache.

  /**
   *
   * Extend native redis to write my own redis
   *
   * @param: {int} time to live for cache
   * 
   * @return: {function} set data for caching
   * @return: {function} get data in redis
   * @return: {instance} instance of native redis
   *
   */
  var myRedis = function(TTL) {
    TTL = parseInt(TTL) ? TTL : defaultTTL;

    var set = function(key, val) {
      redisClient.set(key, JSON.stringify(val));
      redisClient.expire(key, defaultTTL);
    }
    var get = function(key, callback) {
      redisClient.get(key, callback);
    }

    return {
      set           : set,
      get           : get,
      getInstance   : redisClient
    }
  }

  module.exports = myRedis;
}).call(this);