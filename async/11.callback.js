// 비동기의 첫 시작 : callback > promise > async await

// 1. 동기와 비동기
// JavaScript is synchronous. (동기적이다 라는 뜻)
// Execute the code block by in order after hoisting. 호이스팅이 된 이후부터 코드가 나타나는 순서대로, 정해진 순서대로 자동적으로 실행된다. 라는 의미
// hoisting: var, function declaration 자동적으로 제일 위로 올라가는 것.

console.log('1');
setTimeout(function() {
    console.log('2');
}, 1000); // 1초가 지나서 우리가 전달한 콜백함수를 실행해 라는 의미
console.log('3');

// 비동기적 : 언제 코드가 실행될지 예측할 수 없는 것을 말한다. 
// 비동기를 설명하기 위해 아주 적절한 예: setTimeout 이라는 웹 api가 있음

// 콜백함수란: 우리가 전달해준 함수를 나중에 네가 불러줘

// 자바스크립트 엔진은 코드를 제일 위에서부터 아래로 실행, 