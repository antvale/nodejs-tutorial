var fs = require('fs');

var handle = fs.openSync('info.txt', 'r');
var buf = new Buffer(10000);
var read = fs.readSync(handle, buf, 0, 10000, null);
console.log (buf.toString('ascii', 0, read));
fs.closeSync(handle);
