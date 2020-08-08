var util = require('util');
var generic = 'Hi %s Welcome onboard with %s';
var output = util.format(generic, 'John', 'Eva');
console.log(output);