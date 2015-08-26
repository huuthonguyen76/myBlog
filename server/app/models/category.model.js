(function() {
  'use strict';

  // Init require modules
  var mongoose    = require('../configs/database.config.js').mongoose;
  var schema      = mongoose.Schema;

  // Class Member Schema.
  var categorySchema = new schema({
    title       : {type: String, require: true},
    created_at  : {type: Date, default: new Date()},
    updated_at  : Date,
    deleted     : {type: Number, default: 0},
    deleted_at  : Date
  }, {collection  : 'categories'});

  exports.categoryModel = mongoose.model('categoryModel', categorySchema);
}).call(this);
