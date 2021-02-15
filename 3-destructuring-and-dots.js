// array destructuring
const numbers = [54, 92, 100, 50, 80]; 
// const x = numbers[0]; 
// const y = numbers[1];
//const [x, y] = [54, 92];
const [x, y] = numbers;

// console.log(x, y);

function boxify(num1){
    return [num1, num1 + 5]; 
}

const [box1, box2] = boxify(8); 
// console.log(box1, box2); 

// Object destructuring
const person = {id: 1, money: 34, name: 'Rahim', age: 25}; 
const {name, age, money} = person; 

// console.log(money);
// console.log(name, age);

// creat object shortcut
const x1 = 25; 
const y1 = 35; 
const obj = {x1: x1, y1: y1}; 
const obj2 = {x1, y1}; 
// console.log(obj2); 

// new array using three dots.
// numbers.push(56); 
const newNumbers = [...numbers, 56]; 
console.log(newNumbers); 