'use strict';

// 목표: Array 개념 정리 및 활용 방법


// 자료구조: 
// 토끼와 당근이 너무 많다면 바구니 같은 것을 이용해서 비슷 종류의 물건들을 담아 놓을 건데
// 이렇게 우리가 일상생활에서 비슷한 물건들을 바구니에 이렇게 한 곳에 담아 놓는 것처럼 
// 프로그래밍 언어에서도 비슷한 종류의 데이터들을 묶어서 한데다가 보관해 놓는 요런 것들을 : 자료구조

// 자료구조에는 어떤 방식으로 어떤 형식으로 데이터를 담냐에 따라 굉장히 다양한 타입이 있음


// Object와 자료구조의 차이
// Object 는 토끼와 당근
// 토끼 : 귀 2개(프로퍼티), 먹는다(메서드), 뛴다(메서드)
// 당근 : 비타민, 주황색(프로퍼티)
// 서로연관된 특징과 행동들을 묶어놓는 것을 Object

// 검색, 삽입, 정렬, 삭제
// array, map, list, 

// 배열: 칸칸이 촘촘이 모여있는 자료구조
// 포인트는 여기에 인덱스가 지정되어 있음
// 인덱스는 0부터 시작

// Array🎉

// 1. Declaration(선언)
const arr1 = new Array();
const arr2 = [1, 2,];

// 2. Index position (인덱스를 통해서 어떻게 배열에 접근할 수 있는지)
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // 🍎
console.log(fruits[1]); // 🍌
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // undefined

// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
// fruits.forEach(function(fruit, index, array) {
//     console.log(fruit, index, array);
// });

fruits.forEach((fruit) => console.log(fruit););