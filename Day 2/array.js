// let usersArr = ['shuvam','biswajit','ajit','azad','abhijeet','poo'];
//
// console.log(usersArr);
//
// let newArray = usersArr;
//
// newArray[2] = 'Mohan';
//
// console.log(newArray);
// console.log(usersArr);

// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

//Push

let arr = [2,3,4,5,80,9,99,700]

let fruits = ['apple','banana','mango','papaya','grape','melon']

let carBrands = ['tata', 'toyota','kia','audi','bmw','mercedes']

console.log(arr);
console.log(fruits.join('.'));
console.log(typeof fruits);

let newArr = carBrands.join();

console.log(newArr);
console.log(typeof newArr);

//splice & slice

let newArray = [1,5,6,7,8,9,3,4,5,2]

console.log(newArray.slice(0,5))

console.log(newArray.splice(4,2)) // it overwrites the main arary ie newArray


console.log(newArray)


let marvel = ['thor','iron man','spiderman','hulk','wanda']

let dc = ['batman','superman','flash','aquaman','wonder woman'];

let multiverse = marvel.concat(dc);

console.log(multiverse);