(function() {
  'use strict';

  /**
   * Automatic tasks for project
   *
   * Watching changes and compressing all js files require for this project into one file
   */
  var exec = require('child_process').exec;
  var gulp = require('gulp');

  gulp.watch(['app/modules/**/*.js', 'app/bootstraper.js', '!app/bundle.js', '!app/bundle.min.js', '!app/assets/**/*.js'], function(event) {
    exec('browserify app/bootstraper.js > app/bundle.js', function (err, stdout, stderr) {
      if (err) {
        console.log(stderr);
      } else {
        console.log('File : ' + event.path + ' - ' + event.type);
      }
    });
  });

  gulp.watch(['app/assets/less/*.less'], function(event) {
    exec('lessc app/assets/less/main.less > app/assets/css/main.css', function (err, stdout, stderr) {
      if (err) {
        console.log(stderr);
      } else {
        console.log('File : ' + event.path + ' - ' + event.type);
      }
    });
  });
})();