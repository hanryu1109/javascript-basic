'use strict';
// Object-oriented programming
// class: template
// object: instance of class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name; // 여기서 this란 생성될 object 를 가리키는 것임
        this.age = age;
    }

    // method
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

// 2. Object generation
const handone = new Person("hanareum", 30);
console.log(handone.name); // hanareum
console.log(handone.age); // 30
handone.speak(); // hanareum: hello!

// 3. Getter & Setter
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        // getter, object.age 를 실행할 때 실행되는 코드 (프로퍼티를 읽으려고 할 때 실행)
        return this._age;
    }

    set age(value) {
        // setter, object.age = value 를 실행할 때 실행되는 코드 (프로퍼티에 값을 할당하려고 할 때 실행)
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age) // getter와 setter 생성하기 전: -1, getter와 setter 생성이후: 0
// 접근자 property를 사용하면 함수처럼 호출하지 않고, 일반 프로퍼티에서 값에 접근하는 것처럼 평범하게 user.age 를 사용해 프로퍼티 값을 얻을 수 있음

// 4. Fields (Public & Private)
// Too soon!
class Experiment {
    publicField = 2;
    #privateField = 0; // 클래스 내부에서만 값이 보여지고 접근이 되고 값 변경도 가능, 클래스 외부에서는 읽을 수도 변경할 수도 없음
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 5. Static properties and methods
// Too soon!
class Article {
    static publisher = 'handone';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher)
    }
}

// static 이라는 키워드를 사용하면 Object와 상관없이 클래스 자체에 연결됨
const article1 = new Article(1);
const article2 = new Article(2);

console.log(article1.publisher); // undefined
console.log(article2.publisher); // undefined
// static 은 object 마다 할당되어지는 것이 아니라 클래스 자체에, 즉 Article 이라는 클래스 자체에 붙어 있기 때문에 undefined가 나옴

console.log(Article.publisher); // handone

// static 함수를 호출할 때도 클래스 이름을 이용해야 함, 즉
Article.printPublisher(); // handone

// 언제 쓰면 좋을까?
// object 와 상관없이 즉 들어오는 데이터와 상관없이 공통적으로 클래스에서 쓸 수 있는거라면 static과 static method를 이용해서 작성하는 것이 메모리의 사용을 줄여줌

// 6. Inheritance
// a way for one class to extend another class
class Shape {
	constructor(width, height, color) {
		this.width = width;
		this.height = height;
		this.color = color;
	}

	draw() {
		console.log(`drawing ${this.color} color!`);
	}

	getArea() {
		return this.width * this.height;
	}
}

// Shape에서 정한 fields와 methods가 자동적으로 Rectangle, Triangle에 포함됨
class Rectangle extends Shape {}
class Triangle extends Shape {
    // 필요한 함수만 재정의해서 쓰는 것을 overriding
    draw() {
        // 공통적으로 정의해준, Shape 에서 정의해준 메서드가 쓰고 싶을 경우 'super' 키워드를 쓰면 됨 
        super.draw(); // Shape 의 메서드
        console.log('🔺')
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
    toString() {
        return `Triangle color: ${this.color}`
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); // drawing blue color of
console.log(rectangle.getArea()); // 400

const triangle = new Triangle(20, 20, 'red');
triangle.draw(); // drawing red color of
console.log(triangle.getArea()); // 200

// 7. Class checking: instaceOf
// a way for one class to extend another class

// 왼쪽에 있는 오브젝트가 오른쪽 클래스의 인스턴스인지 아닌지 확인 하는 
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true, 왜냐면 상속을 했으니깐
console.log(triangle instanceof Object); // true, 