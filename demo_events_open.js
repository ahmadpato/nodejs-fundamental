var fs = require('fs');
var readStream = fs.createReadStream('./mynewfile3.txt');

readStream.on('open', function(){
	console.log('The file is open');
});