var path = require('path');
var soloify = require('./');
var vm = require('vm');
var test = require('tap').test;
var browserify = require('browserify');

test('run code', function(t) {
    t.plan(1);

    var b = browserify(path.resolve(__dirname, 'tests/main.js'))
        .transform(soloify);
    b.bundle(done);

    function done(err, src) {
        if (err) throw err;

        vm.runInNewContext(src, { doTest: doTest });
        function doTest(code) {
            t.equal(code, 'Hello from solo!');
        }
    }
});
