var version = require('../package.json').version,
  file = './dist/picky-highlight.js',
  fs = require('fs');

fs.readFile(file, 'utf8', function (err, data) {

  if (err) {
    return console.log(err);
  }

  data = data.replace(/<@version@>/g, version);

  fs.writeFile(file, data, 'utf8', function (err) {
     if (err) return console.log(err);
  });

});