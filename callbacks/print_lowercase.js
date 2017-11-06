var getHTML = require('./http-functioncopy');

function lowercase (html){
var str = html.toLowerCase();
console.log(str);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

getHTML(requestOptions,lowercase);