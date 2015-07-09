var path = require('path');
var solo = require('solo-lisp');
var through = require('through');

module.exports = transform;

function transform(file) {
  if (path.extname(file).toLowerCase() !== '.sl') {
    return through();
  }

  var src = '';
  return through(data, end);

  function data(s) {
    src += s;
  }

  function end() {
    try {
      src = solo.write(solo.parse(src));
    } catch(e) {
      this.emit('error', e);
      return;
    }

    this.queue(src);
    this.queue(null);
  }
}
