// variable: let, const
let money = 20; 
money = 12; 
const names = 'Hridi';

let isConfident = false; 

const person = {
    name: 'Timittra', 
    age: 22, 
    city: 'Rangpur'
}; 

const statement = `This person ${names} with age ${person.age}.`; 

// condition
if(money>20 && age<30){

}else{

}

// array
const numbers = [10, 20, 30]; 
const respected = ['Motiur', 'Jahangir']; 
const products = [{name:'Mobile', price:100}, {name:'Laptop', price:500}, {name:'Watch', price:20}];

// loop: For loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    
}

// function: regular, arrow
function add(num1, num2){
    return num1 + num2; 
}

const result = add(45, 65); 

// arrow

const fiveTimes = (num) => num * 5; 
const add2 = (num1, num2) => num1 + num2; 
const doMath = (x, y) => {
    const sum = x + y; 
    return sum * 2; 
}