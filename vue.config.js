// Giving Sass some Autoprefixer love...

var sass = require('node-sass');
var autoprefixer = require('autoprefixer');
var postcss = require('postcss');

module.exports = function(compiler) {
  compiler.register({
    lang: 'scss-ap',
    type: 'style',
    compile: function(content, cb) {
      sass.render({
        data: content
      }, function (err, res) {
        if (err) {
          cb(err);
        } else {
          var css = res.css.toString();
          var prefixed = postcss([autoprefixer]).process(css);
          cb(null, prefixed);
        }
      });
    }
  });
};
