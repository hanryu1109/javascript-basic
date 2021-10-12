'use strict';

// Quiz
// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    let fruitsString = '';
    fruits.forEach(fruit => {
        fruitsString += fruit
    });
    console.log(fruitsString);
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    fruits.split(", ").forEach(fruit => console.log(fruit));
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    array.reverse();
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    array.shift();
    array.shift();
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
    students.forEach((student) => {
        if (student.score >= 90) {
            console.log(student)
        }
    });
}

// Q6. make an array of enrolled students
{
    let enrolledStudents = [];
    students.forEach((student) => {
        if (student.enrolled == true) {
            enrolledStudents.push(student);
        }
    });
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    let studentsScore = [];
    students.forEach((student) => {
        studentsScore.push(student.score);
    });
    console.log(studentsScore);
}

// Q8. check if there is a student with the score lower than 50
{
    students.forEach((student) => {
        if (student.score <= 50) {
            console.log(true)
        }
    });
}

// Q9. compute students' average score
{
    const totalScore = studentsScore.reduce((prev, curr) => prev + curr);
    const studentsNum = studentsScore.length;
    let averageScore = totalScore / studentsNum;
    console.log(averageScore);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    let studentsScoreString = '';
    students.forEach((student) => {
        studentsScoreString += student.score + ", "
    });
    studentsScoreString = studentsScoreString.slice(0, -2);
    console.log(studentsScoreString);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    let studentsScore = [];
    students.forEach((student) => {
        studentsScore.push(student.score);
    });
    studentsScore.sort((a, b) => {
        return a - b;
    });

    let studentsScoreString = '';
    studentsScore.forEach((score) => {
        studentsScoreString += score + ", "
    });
    studentsScoreString = studentsScoreString.slice(0, -2);
    console.log(studentsScoreString);
}