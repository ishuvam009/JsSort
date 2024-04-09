let num = 2500500;
let floAtNum = 256.2240;

//convert to string
let conString = num.toString();

console.log(typeof conString)

// To local String
console.log(num.toLocaleString('en-IN')); //convert to local ie INDIAN


//Fixed

let toFixed = floAtNum.toFixed(2)
console.log(toFixed)

//Parse Integer

console.log(parseInt('2352.235ff'));

//Parse Float values

console.log(parseFloat(809))

//Presion

console.log(floAtNum.toPrecision(5))


