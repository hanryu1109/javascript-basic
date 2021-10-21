"use strict";

// 1. async & await
// clear style of using Promise :)

// 2. async 써보기
// function fetchUser() {
//     // do network request in 10 secs...
//     return new Promise((resolve, reject) => {
//         resolve('han');
//     })
// }

async function fetchUser() {
    // do network request in 10 secs...
    return "han";
}
// async 라는 키워드를 함수 앞에 쓰면 코드 블럭이 자동으로 Promise로 바뀐다.
// aysnc, await는 Promise를 좀 더 간편하게 쓸 수 있는 Syntatic Sugar

const user = fetchUser();
user.then(() => {
    console.log(user);
});
console.log(user);

// 3. await 기다려
// await는 async가 붙은 함수 안에서만 사용 가능
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(2000);
    // throw "error";
    return "🍎";
}

async function getBanana() {
    await delay(1000);
    return "🍌";
}

// function pickFruits() {
//     return getApple().then((apple) => {
//         return getBanana().then((banana) => `${apple} + ${banana}`);
//     });
// }

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 4. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then((fruits) =>
        fruits.join(" + ")
    );
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);

class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (
                    (id === "handone" && password === "1234") ||
                    (id === "coder" && password === "dream")
                ) {
                    resolve(id);
                } else {
                    reject(new Error("not found"));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === "handone") {
                    resolve({ name: "handone", role: "admin" });
                } else {
                    reject(new Error("no access"));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

async function getUserInfo() {
    try {
        const userLoginInfo = await userStorage.loginUser(id, password);
        const userInfo = await uhanserStorage.getRoles(userLoginInfo);
        return `Hello, ${userInfo.name}! You have a ${userInfo.role} role!`;
    } catch (error) {
        return error;
    }
}

getUserInfo().then(console.log);
