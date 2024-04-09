// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

let newString = 'Shuvam';
console.log(newString.length);
console.log(newString.indexOf('m'));
//console.log(newString.)

let userName = 'Shuvam Mandal Shuvam';
console.log(userName.indexOf('Shuvam'))

//last index of.
console.log(userName.lastIndexOf('Shuvam'))

//Slice in JS

function slicing(str, start, end){
    console.log(`String before slicing: ${str}`);
    console.log(`String after slicing: ${str.slice(start,end)}`);
}

slicing('My name is Shuvam',10,17);

//Substring

let substring = 'Bhubaneswar ';
console.log(substring.substr(5,6)); //this will give the value from 5 to next 6 value ie. 6 is the length.

//Replace

function spiLite(strr, find, repl){
    console.log(`String before the split: ${strr}`);
    console.log(`After split: ${strr.replace(find,repl)}`);
}

spiLite('Hi this is a java program.','java','javascript');

//Trim

let stRrr = '        Hi Javascript.          ';
console.log(stRrr.trim());

//To upper case

let cAse = 'Hi my name is shuvam mandal 9897 -- 5# %22@';
console.log(cAse.toUpperCase());


//To lower case

console.log(cAse.toLowerCase());