
//내장 모듈
const http = require('http');
const server = http.createServer(function (request, response) {
  response.statusCode = 200;
  response.setHeader('Content-type', 'text/html');

  const mainPage = require("./module/html.js");
  console.log(mainPage);

  response.write(mainPage);
  // response.write('test');
  response.end();
});

server.listen(2080, function (error) {

  if (error) {
    console.error('서버 X');
  }
  else {
    console.log('서버 돌아감');
  }

});