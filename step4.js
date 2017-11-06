var https = require('https');
var dataconcat = '';
var hosteth = process.argv[2];
var patheth = process.argv[3];

var options = {
host: hosteth,
path: patheth
};
function printHTML (html) {
  console.log(html);
}

function getHTML (hostAndPath,callback){


 var hostAndPath;

 https.get(hostAndPath, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
    dataconcat += data;
  });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
    callback(dataconcat);
  });

});



}

getHTML(options,printHTML);