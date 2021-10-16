'use strict';

// Promise is a JavaScript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// When new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work(network, read files);
    console.log('doing something...');
    setTimeout(() => {
        resolve('ellie');
    }, 2000);
});