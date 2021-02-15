const money = 150; 
const active = false; 
let cssClass; 
let food; 

// if(money>100){
//     food = 'ice-cream';
// }
// else{
//     food = 'chocolate'; 
// }
// ternary
// condition ? true value : false value; 
 food = money>100 ? 'ice-cream' : 'chocolate'; 

if(active === true){
    cssClass = 'active'; 
}
else{
    cssClass = 'inactive'; 
}

const cssClass2 = active ? 'active' : 'inactive'; 

function displayUser(){
    // console.log('Timittra Islam Hridi'); 
}
// function call alternatives
// active? displayUser() : hideUser();

// alternatives instead of ? operator
active && displayUser(); 
active || displayUser(); 

const x = active && 5; 
// console.log(x); 

const y = active || 5; 
// console.log(y); 

//string to number
const number = +'45'; 

//number to string
const numText = 45 + ''; 
// console.log(numText); 

// default parameter
function add(num1, num2 = 5){
    // num2  = num2 || 5; 
    return num1 + num2;    
}

const result = add(45);
console.log(result); 