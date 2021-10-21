"use strict";

// 프로미스는
// 콜백을 대체하는 자바스크립트 오브젝트로
// 비동기를 간편하게 하는 오브젝트

// Promise is a JavaScript object for asynchronous operation.
// state: pending(promise가 만들어져서 지정한 operation이 수행중일 때) -> fulfilled(operation을 성공적으로 다 끝내게 되면) or rejected(파일이 없거나 문제가 생긴다면)
// Producer(원하는 기능을 수행해서 해당하는 데이터를 만들어내는) vs Consumer

// 중점적으로 알면 좋은 것
// 1. 상태 2. Producer vs Consumer

// 1. Promise 만들기 - Producer
// When new Promise is created, the executor runs automatically.
// promise는 class 이기 때문에 new 라는 키워드를 이용해서 오브젝트를 생성할 수 있음
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files);
    // 네트워크에서 데이터를 받아오거나, 파일에서 큰 데이터를 읽어오거나 이런 과정은 시간이 꽤 걸립니다.
    // 이렇게 무거운 작업을 동기적으로 synchronous적으로 처리하게 되면 그 일을 하는 동안은 다음 라인 코드가 실행되지 않기 때문에 시간이 조금 걸리는 일들은 프로미스로 만들어서 비동기적으로 처리하는 것이 좋다.
    console.log("doing someting...");

    setTimeout(() => {
        // resolve('ellie')
        reject(new Error("no network"));
    }, 2000);
});

// 네트워크 요청을 사용자가 요구했을 때만 해야 되는 경우라면
// 즉 사용자가 버튼을 눌렀을 때만 네트워크 요청을 해야하는 경우라면  어떻게?
// 프로미스를 만드는 순간 그 안에 executer 라는 콜백함수가 바로 실행되기 때문에 이 점을 유의!!

// 2. Promise 사용하기 - Consumers: then, catch, finally
promise
    .then((value) => {
        // 여기서 value는 promise가 정상적으로 잘 작동되어서 resolve 콜백함수가 실행되어서 받게되는 값 즉 여기서는 'ellie'라는 값이 value 가 되겠다.
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("finally");
    });

// 3. Promise 연결하기 & Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    });
});

fetchNumber
    .then((num) => num * 2)
    .then((num) => num * 3)
    .then((num) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(num - 1);
            }, 1000);
        });
    })
    .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve("🐓"), 1000);
    });

const getEgg = (hen) =>
    new Promise((resolve, reject) => {
        // setTimeout(() => resolve(`${hen} => 🥚`), 1000);
        setTimeout(() => reject(new Error(`${hen} => 🥚`)), 1000);
    });

const cook = (egg) =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

// getHen()
//     .then((hen) => getEgg(hen))
//     .then((egg) => cook(egg))
//     .then((meal) => console.log(meal));

// getHen() //
//     .then(getEgg)
//     .then(cook)
//     .then(console.log);

getHen() //
    .then(getEgg)
    .catch((error) => {
        return "🌭";
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);
