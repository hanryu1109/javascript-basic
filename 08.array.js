'use strict';

// 목표: Array 개념 정리 및 활용 방법

// ✅ 자료구조: 
// 토끼와 당근이 너무 많다면 바구니 같은 것을 이용해서 비슷 종류의 물건들을 담아 놓을 건데
// 이렇게 우리가 일상생활에서 비슷한 물건들을 바구니에 이렇게 한 곳에 담아 놓는 것처럼 
// 프로그래밍 언어에서도 비슷한 종류의 데이터들을 묶어서 한데다가 보관해 놓는 요런 것들을 : 자료구조

// ❗ 자료구조에는 어떤 방식으로 어떤 형식으로 데이터를 담냐에 따라 굉장히 다양한 타입이 있음 ❗ 

// ❓ Object와 자료구조의 차이
// Object 는 토끼와 당근
// 토끼 : 귀 2개(프로퍼티), 먹는다(메서드), 뛴다(메서드)
// 당근 : 비타민, 주황색(프로퍼티)
// 💛 서로연관된 특징과 행동들을 묶어놓는 것을 Object 🧡

// 검색, 삽입, 정렬, 삭제
// array, map, list, 

// 배열: 칸칸이 촘촘이 모여있는 자료구조
// 포인트는 여기에 인덱스가 지정되어 있음
// 인덱스는 0부터 시작

// Array 🎉

// 1. Declaration(선언)
const arr1 = new Array();
const arr2 = [1, 2,];

// 2. Index position (인덱스를 통해서 어떻게 배열에 접근할 수 있는지)
const fruits = ['🍎', '🍌'];
console.log(fruits); // ['🍎', '🍌']
console.log(fruits.length); // 2
console.log(fruits[0]); // 🍎
console.log(fruits[1]); // 🍌
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // 🍌, 마지막 요소를 찾을 때는 [배열 길이 - 1] 이렇게 지정을 한다

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// 🍎
// 🍌

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}
// 🍎
// 🍌

// c. forEach 
// forEach는 콜백함수를 받아 옴! 콜백함수의 인자로 value, index, array를 받아옴
// forEach는 두번째 인자로 객체를 받아올 수 있음(얘는 필수적이지는 않음)
fruits.forEach(function(fruit, index, array) {
    console.log(fruit, index, array);
});
// 🍎 0 (2) ['🍎', '🍌']
// 🍌 1 (2) ['🍎', '🍌']

fruits.forEach((fruit) => console.log(fruit));
// 🍎
// 🍌

// 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('🍓', '🍑');
console.log(fruits); // (4) ['🍎', '🍌', '🍓', '🍑']

// pop: remove an item from the end
fruits.pop();
console.log(fruits); // (3) ['🍎', '🍌', '🍓']
fruits.pop();
console.log(fruits); // (2) ['🍎', '🍌']

// unshift: add an item to the beginning
fruits.unshift('🍋', '🍓');
console.log(fruits); // (4) ['🍋', '🍓', '🍎', '🍌']

// shift: remove an item from the beginning
fruits.shift();
console.log(fruits); // (3) ['🍓', '🍎', '🍌']
fruits.shift();
console.log(fruits); // (2) ['🍎', '🍌']

// note!! shift, unshift are slower than pop, push
// 전체의 데이터가 shift 되어야 하는 오퍼레이션들은 느릴 수 밖에 없다
// 배열의 길이가 길면 길수록 더 오래걸림

// splice: remove an item by index position
fruits.push('🍓', '🍑', '🍋');
console.log(fruits); // (5) ['🍎', '🍌', '🍓', '🍑', '🍋']

// fruits.splice(1); 
// console.log(fruits); // ['🍎']

// 만약 인덱스가 1인 원소만 삭제하고 싶다면
// fruits.splice(1, 1); 
// console.log(fruits); // (4) ['🍎', '🍓', '🍑', '🍋']

// 만약 인덱스가 1인 원소를 삭제하고 다른 원소를 넣고 싶을 때
fruits.splice(1, 1, '🍉', '🍈');
console.log(fruits); // (6) ['🍎', '🍉', '🍈', '🍓', '🍑', '🍋']

// combine two arrays
const fruits2 = ['🥝', '🍇'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // (8) ['🍎', '🍉', '🍈', '🍓', '🍑', '🍋', '🥝', '🍇'] 

// 5. Searching
// find the index
console.clear();
console.log(fruits); // (6) ['🍎', '🍉', '🍈', '🍓', '🍑', '🍋']
console.log(fruits.indexOf('🍎')); // 0
console.log(fruits.indexOf('🍉')); // 1

// includes
console.log(fruits.includes('🍉')); // true 
console.log(fruits.includes('🍇')); // false
console.log(fruits.indexOf('🍇')); // -1

// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits); // (7) ['🍎', '🍉', '🍈', '🍓', '🍑', '🍋', '🍎']
console.log(fruits.indexOf('🍎')); // 0
console.log(fruits.lastIndexOf('🍎')); // 6

// Array