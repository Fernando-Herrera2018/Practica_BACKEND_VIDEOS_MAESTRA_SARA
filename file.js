var fs = require('fs');
fs.readFile('file.js', 'ascii', function (err, data) {
  console.log(data);
});