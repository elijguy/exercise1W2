var getHTML = require('./http-functioncopy');

function reverse (html){
  var rev;
  var str = html.split(" ");
  str.reverse();
  rev = str.join(" ");
  console.log(rev);
  }



  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/reverse.html'
  };

  getHTML(requestOptions,reverse);