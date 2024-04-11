//hoisting in variable
console.log(a)

var a = 30;

//hoisting in function

add(70,30);  //we can access the function before its initialized
// (only function can be accessed not variable, object and array)

function add(num1, num2){
    let sum = console.log(num1 + num2);
    return sum;
}