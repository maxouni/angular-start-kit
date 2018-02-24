const process = require('process');
const fs = require('fs');

const filename = __dirname + '/src/environments/environment.ts';
var environments = fs.readFileSync(filename, 'utf8');

Object.keys(process.env).forEach(function (key) {
  environments = environments.replace('{' + key + '}', process.env[key]);
});

fs.writeFileSync(filename, environments, function(err) {
  if(err) {
    return console.log(err);
  }
});
