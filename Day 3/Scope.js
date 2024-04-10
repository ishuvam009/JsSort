/*
    There is three types of scope is there is JS
    1. Global Scope
    2. Block Scope
    3. Function Scope
*/

//Global Scope

let a = 10;
let b = 20;
let c = 30;

// console.log(a)
// console.log(b)
// console.log(c)

function scope() {
    let sum = 30;
    let a = 100;

    if(sum === 10){
        let a = 20;
        console.log(a)
    }else
        sum = a + 20
    // let a = 9000;
    return sum;
}

console.log(scope())