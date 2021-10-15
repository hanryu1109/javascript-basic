// 비동기의 첫 시작 : callback > promise > async await



// 1. 동기와 비동기
// JavaScript is synchronous. (동기적이다 라는 뜻)
// Execute the code block by in order after hoisting. 호이스팅이 된 이후부터 코드가 나타나는 순서대로, 정해진 순서대로 자동적으로 실행된다. 라는 의미
// hoisting: var, function declaration 자동적으로 제일 위로 올라가는 것.

console.log('1');
setTimeout(() => console.log('2'), 1000); // 1초가 지나서 우리가 전달한 콜백함수를 실행해 라는 의미
console.log('3');

// 비동기적 : 언제 코드가 실행될지 예측할 수 없는 것을 말한다. 
// 비동기를 설명하기 위해 아주 적절한 예: setTimeout 이라는 웹 api가 있음

// 콜백함수란: 우리가 전달해준 함수를 나중에 네가 불러줘

// 자바스크립트 엔진은 코드를 제일 위에서부터 아래로 실행, 



// 2. 콜백 마지막 정리
// 콜백함수는 비동기 일때만 쓸까? Nope(2가지 경우로 나뉨)

// Synchronous callback (즉각적으로 동기적으로 실행하는 콜백)
// Asynchronous callback (나중에 언제 실행될지 모르는 비동기 콜백)

// Synchronous callback
function printImmediately(print) {
    print();
} // 함수는 호이스팅된다.
printImmediately(()=> console.log('hello'));

// Asynchronous callback 
function printWithDealy(print, timeout) {
    setTimeout(print, timeout);
}
printWithDealy(()=> console.log('async callback'), 2000);



// 3. 콜백 지옥 체험🤦‍♀️
// Callback Hell example

class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === "handone" && password === "1111") ||
                (id === "coder" && password === "academy")
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }
    
    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === "handone") {
                onSuccess({ name: "handone", role: "admin" });
            } else {
                onError(new Error("no access"));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('Enter your ID');
const password = prompt('Enter your Password');
userStorage.loginUser(
    id, 
    password, 
    (user) => {
        userStorage.getRoles(
            user, 
            (userWithRole) => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role.`);
            },
            (error) => {
                console.log(error);
            }
        );
    }, 
    (error) => {console.log(error)}
);

// 4. 콜백 체인의 문제점