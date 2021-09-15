'use strict';
// Objects
// one of the JavaScript's data types
// a collection of related data and/or functionality.
// Nearyly all objects in JavaScript are instaces of Object
// object = { key: value };

// 1. Literals and Properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const handone = { name: 'handone', age: 30 };
print(handone);

// Runtime: 프로그램이 동작하고 있을 때
// 자바스크립트 동적 타입 언어: 값이 할당되는 과정에서 그 값의 타입에 의해 자동으로 data type이 결정되는 걸 의미

// With JavaScript magic(dynamic typed language)
// can add properties later
handone.hasJob = true;
console.log(handone.hasJob);

// can delete properties later
delete handone.hasJob;
console.log(handone.hasJob); // undefined


// 2. Computed properties
// key should be always string
console.log(handone.name); // handone, 코딩하는 그 순간 키에 관한 값을 받아오고 싶을 때 
console.log(handone['name']); // handone, 우리가 정확하게 어떤 키가 필요한지 모를때, 즉 런타임에서 결정될 때 사용해야 함, 이 때 실시간으로 원하는 키의 값을 받아오고 싶다면
console.log(handone.hasJob); // undefined
handone['hasJob'] = true;
console.log(handone.hasJob); // true

function printValue(obj, key) {
    console.log(obj.key); // undefined
    console.log(obj['key']); // undefined
    console.log(obj[key]); // handone
}


// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'jane', age: 12 };
const person3 = { name: 'steve', age: 22 };
const person4 = makePerson('handone', 30);
const person5 = new Person('ellie', 20);
console.log(person4); // { name: 'handone', age: 30 }
console.log(person5); // { name: 'ellie', age: 20 }

// function makePerson(name, age) {
//     return {
//         name: name,
//         age: age,
//     }
// }

// 위와 같이 키와 value의 이름이 동일하다면 value 생략가능
function makePerson(name, age) {
    return {
        name,
        age,
    }
}


// 4. Constructor function
function Person(name, age) {
    // this = {}
    this.name = name;
    this.age = age;
    // return this;
}


// 5. in operator: property existence check (key in obj)
// 해당하는 object 안에 key 가 있는지 없는 지 확인하는 in 연산자
console.log('name' in handone); // true
console.log('age' in handone); // true
console.log('height' in handone); // false
console.log(handone.height) // undefined


// 6. for..in vs for..of
// for (key in obj)
for (key in handone) {
    console.log(key);
}
// name, age

// for (value of iterable)
const array = [1, 2, 4, 5];
// 기존
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
// retrun: 1, 2, 4, 5

for (value of array) {
    console.log(value);
}
// return: 1, 2, 4, 5


// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'handone', age: 20 };
const user2 = user;
user2.name = 'coder';
console.log(user); // { name: 'coder', age: 20 };

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.log(user3); // { name: 'coder', age: 20 };

// new way
const user4 = Object.assign(user4, user);
console.log(user4); // { name: 'coder', age: 20 };

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue
console.log(mixed.size); // big
// Object.assign 인자들의 프로퍼티가 같은 것이 있다면 뒤의 인자가 앞의 인자의 프로퍼티를 덮어버린다.