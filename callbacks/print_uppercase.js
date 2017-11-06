var getHTML = require('./http-functioncopy');

function uppercase (html){
var str = html.toUpperCase();
console.log(str);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

getHTML(requestOptions,uppercase);