'use strict';

// Quiz
// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(); // 구분자를 넣지 않으면 기본적으로 comma 가 들어간다
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(", ");
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array); // 배열 자체도 바뀜
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    // const result = array.splice(0, 2);
    // console.log(result); // (2) [1, 2]
    // console.log(array); // (3) [3, 4, 5]

    const result = array.slice(2, 5);
    console.log(result); // (3) [3, 4, 5]
    console.log(array); // (5) [1, 2, 3, 4, 5]
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    const result = students.some((student) => student.score < 50);
    console.log(result); // 배열 중 어떤 요소 하나라도 만족되는 것이 있는지 없는 지를 검사할 때는 some

    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2); // 배열 중 모든 요소가 만족하는지를 검사할 때는 every
}

// Q9. compute students' average score
{
    // const result = students.reduce((prev, curr) => {
    //     console.log("---------");
    //     console.log(prev);
    //     console.log(curr);
    //     return prev + curr.score;
    // }, 0);

    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);

    const result2 = students.reduceRight((prev, curr) => { // 배열이 반대로 순차적으로 실행
        console.log("---------");
        console.log(prev);
        console.log(curr);
        return prev + curr.score;
    }, 0);
    console.log(result2 / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    // const result = students.map((student) => student.score).join(); // 45,80,90,66,88
    const result = students.map((student) => student.score)
    .filter((score) => score >= 50)
    .join(); // 80,90,66,88
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students.map((student) => student.score)
    .sort((a, b) => a - b)
    .join();

    console.log(result);
}