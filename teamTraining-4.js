const { write } = require('fs');
const http = require('http'); //http 모듈을 불러온다.
//http 모듈 안에는 각종 요청과 연결을 처리하기 위한 server객체가 존재.

//createServer() : 생성
//close() : 종료
//listen() : 접속 포트 할당
//코드 200 : OK라는 뜻. 정상적으로 받았다는 것.


//로그인 폼
//<form> 태그의 action 속성은 폼 데이터(form data)를 서버로 보낼 때 해당 데이터가 도착할 URL을 명시 = data를 받는 곳
//input type submit = 데이터 전송 제출 버튼
const formTag = `
<form method="GET" action="/login">
<input type="text" name="id">
<input type="submit">
</form>
`;


//h1태그 환영인사
function greet(fromSubmitString) {
  return `<h1>${fromSubmitString}</h1>`;
}


function firstPage(data) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
${data}
</body>
</html>
`;
}




// http 모듈의 createServer() 메서드를 사용하면 server 객체를 생성할 수 있습니다.
//서버 요청 관리
const server = http.createServer(function (request, response) {

  // 최초접속
  if (request.method === 'GET' && request.url === '/') {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    //화면에 formTag 띄움
    let page = firstPage(formTag);
    // write(page) = page라는 컨텐츠 내보내기
    response.write(page);
    //컨텐츠 출력 완료(응답 종료)
    response.end();
  }



  // 무언가
  //startsWith()는 특정 문자열로 시작하는지 확인하는 메서드
  //http 메서드가 GET이면서 url이 /login으로 시작하면
  if (request.method === 'GET' && request.url.startsWith('/login')) {
    console.log(request.url);
    const name = request.url.split('=')[1];
    console.log(name);



    //writeHead() : http 프로토콜의 header를 설정하는 부분. 프로토콜 양식?
    //200 = ok 사인
    //content-type는 헤더 중 일부분
    response.writeHead(200, { 'Content-Type': 'text/html' });
    let page = firstPage(greet(name)) //name안에 환영인사 리턴, firstPage 매개변수 data를 통해 body안에 써짐 / 이 과정을 page에 담음 
    response.write(page); //화면에 body 속 환영인사 출력
    response.end();       // 데이터 보내고 응답 끝
    //end([data], [encoding]) 함수는 본문을 작성하는 것.

  }
});

// 서버 포트 설정
server.listen(2080, function (error) {
  if (error) { console.error('서버 안돌아감') } else { console.log('서버 돌아감'); }
});