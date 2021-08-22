// 1. Use strict
// added in ES5
// use this for Vanila Javascript
'use strict';

// 2. Variable
// let (added in ES6)
let name = 'done'; // 선언(declare)과 동시에 할당(assign)
console.log(name);
name = 'hello';
console.log(name);
// 어플리케이션을 실행하게 되면 어플리케이션마다 쓸 수 있는 메모리가 할당된다
// 메모리는 텅텅 비어져 있는 박스들
// 어플리케이션마다 쓸 수 있는 박스들의 개수가 제한적으로 할당 되어 진다
// let name 으로 변수를 선언하면 한 가지의 박스를 가리킬 수 있는 포인터가 생기게 된다

// block scope
let globalName = 'global name';
{
    let name2 = 'done';
    console.log(name2);
    name2 = 'hello';
    console.log(name2);
}
console.log(name2); // 아무 값도 안나옴, block scope 안에 있어서
console.log(globalName) // global name

// var (don't ever use this!)
// var hoisting (move declararation form bottom to top)
// var은 block scope 이 없음
console.log(age); // undefined, var hoisting 때문에 발생
age = 4;
var age;

{
    age2 = 5;
    var age;
}
console.log(age2); // 5가 출력됨..

// 3. Constants
// favor immutable data type always for a few reasons:
// - security
// - thread safety 어플리케이션이 실행되면 한가지 프로세스가 할당되고 그 프로세스 안에는 다양한 쓰레드들이 동시에 돌아가면서 어플리케이션을 조금 더  효율적으로 빠르게 동작할 수 있도록 도와주는데, 다양한 쓰레드들이 동시에 변수에 접근해서 값을 변경할 수 있는데 동시에 값을 변경한다는 것은 위험, 가능하면 값이 변하지는 않는 것을 사용하는 것이 좋다.
// - reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function : 함수도 변수에 할당, 함수의 파라미터로 전달 가능, 함수의 리턴 타입도 가능

const count = 17 // integer
const size = 17.1 // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - special numeric values:
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, dont' use it yet)
const bigInt = 12345678910123456789101234567891012345678910n; // over (-2**53 ~ 2**53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brenda = 'brendan';
const greeting = 'hello ' + brenda;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brenda}!`; // template litearls (string)
console.log(`value: ${greeting}, type: ${typeof greeting}`);

// boolean
// false: 0, null, undefined, Nan, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifies for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true 
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`) // 정상출력, symbole을 출력하려면 string 으로 바꿔줘야만 하는데 그 메소드가 .description 이다

// object, real-life object, data structure
const done = {name: 'done', age: 20};
done.age = 29;

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`); // string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // '75', string
text = '8' / 2;
console.log(`value: ${text}, type: ${typeof text}`); // 4, number
console.log(text.charAt(0)); // TypeError