function printHTML (html) {
  console.log(html);
}


var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};



getHTML(requestOptions,printHTML);