



module.exports = function getHTML (options, callback) {
  var https = require('https');
  var dataconcat = '';







 https.get(options, function (response) {

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


