var fs = require('fs'),
  readFiles = require('./readfile.js');

readFiles('src/templates/').then(function (data){

  fs.writeFile("./src/js/builtTemplates.js", 'export default ' + JSON.stringify(data), function(err) {

    if(err) {
        return console.log(err);
    }

  });

});