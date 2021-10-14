// 목표 
// 1. JSON의 개념
// 2. JavaSccript에서 JSON 활용방법
// 3. 유용한 JSON 관련 사이트 소개

// HTTP: Hypertext Transfer Protocol
// 텍스트 기반의 통신 규약으로 인터넷에서 데이터를 주고받을 수 있는 프로토콜로 HTML로 작성된 웹페이지나 동영상, 음성 파일 등등을 주고 받기 위한 통신 규약이다.
// HTTP는 클라이언트가 서버에게 데이터를 리퀘스트(요청)할 수 있고 
// 서버는 클라이언트가 요청한 곳에 따라서 그에 맞는 리스펀스(응답)을 클라이언트에게 보내주는 이런 방식으로 진행되는 것을 의미합니다.

// 여기서 Hypertext는 웹 사이트에서 이용되어 지고 있는 하이퍼링크만 얘기하는 것이 아니라 전반적으로 쓰여지고 있는 리소스들, 문서나 파일들을 다 포함해서 말합니다.


// JavaScript를 통해 HTTP 요청(서버에게 데이터를 요청)을 작성하는 방법이 바로, AJAX
// AJAX: Asynchronous JavaScript And XML 의 약자로
// 브라우저가 가지고 있는 XMLHttpRequest라는 자바스크립트 객체를 이용하여 웹 서버와 비동기로 통신하고 DOM을 이용하여 웹 페이지를 동적으로 갱신하는 프로그래밍 기법을 말한다.

// A는 웹페이지에서 동적으로 서버에게 데이터를 주고받을 수 있는 기술을 의미하는데
// 대표적으로는 XHR(XMLHttpRequest) 오브젝트가 있습니다. 
// XMLHttpRequest 오브젝트는 브라우저의 API에서 제공하는 오브젝트 중 하나로 이 오브젝트를 이용하면 간단하게 서버에게 데이터를 요청하고 받아올 수 있습니다.
// 최근 브라우저의 api에 추가된 fetch() API를 이용하면 간편하게 데이터를 주고 받을 수 있다
// * fetch() API는 인터넷 익스플로러에서 지원이 되지 않음

// AJAX 와 XHR에서 계속 반복해서 xml이 등장하고 있는데
// 이 xml은 바로 html 과 같은 markup 언어 중 하나로 이런 식으로 태그들을 이용해서 데이터를 나타나는데 
// 서버가 데이터를 주고 받을 때는 xml만 가능한가요? : 서버와 데이터를 주고 받을 때는 XML 뿐만 아니라 굉장히 다양한 파일 포맷을 전달받을 수 있는데요. 
// Ajax와 XHR이 활발히 개발되고 있을 당시의 마이크로소프타사의 아웃룩 개발팀이 활발히 참여해서 만들게 되었는데요, 이 때 아웃룩은 서버와 클라이언트의 데이터를 전송할 때 XML 을 사용했는데요 그래서 ...
// 데이터를 주고 받을 때는 XML뿐만 아니라 다양한 타입의 데이터를 주고 받을 수 있음, JSON, XML, ... 
// fetch() API, XHLHttpRequest 둘 다 서버와 통신 가능

// xml을 주고 받으면 불필요한 태그들이 너무 많이 들어가서 사이즈도 커지고 가독성도 ㅜㅜ
// xml은 많이 사용되지 않고 요즘에는 json을 많이 사용한다.


// JSON
// JavaScript Object Notation
// 클라이언트와 서버간의 데이터 교환 규칙(데이터 포맷)을 말한다.
// 일반 데이터 포맷보다 데이터 구조화가 가능하며 XML보다 가볍기 때문에 사용이 편리, 순수한 텍스트로 구성되어 있음

// JSON.stringfy() 메서드 : JavaScript 값이나 객체를 JSON 문자열로 변환(Object to JSON)
// JSON.parse() 메서드 : JSON 문자열의 구문을 분석하고, 그 결과에서(JSON to Object)


// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['APPLE', 'BANANA']);
console.log(json);
console.log(typeof json);

const rabbit = {
    name: "tori",
    color: "white",
    size: null,
    birthDate: new Date(),
    jump: () => console.log(`${name} can jump`), // 함수는 object의 data에 보이지 않음
};

json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color", "size"]); // 원하는 property만 JSON으로 변환됨
console.log(json);

json = JSON.stringify(rabbit, (key , value) => {
    console.log(`key: ${key}, value: ${value}`);
    // return value;
    return key === "name" ? "handone" : value;
});
console.log(json);

// 2. JSON to Object
// parse(json)
console.clear();

json = JSON.stringify(rabbit);

const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === "birthDate" ? new Date(value) : value;
});
console.log(obj);

rabbit.jump(); // can jump!
// obj.jump(); // uncaught TypeError

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
// console.log(obj.birthDate); // 2021-10-13T09:13:08.758Z
