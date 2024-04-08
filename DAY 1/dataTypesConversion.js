// Data Types conversions.

let value = '30'; //This is a string

console.log(typeof (value)); // we can also write (typeof value).

//Conversion into number.

let convertValue = Number(value);
console.log(convertValue);
console.log(typeof (convertValue));

console.log();
console.log();

/*
    '1213ljjn' => NaN
*/

//Writing a function which checks whether the conversion is proper or not.

function typeChecks() {
    if(!isNaN(convertValue)){
        console.log('The consversion is sucessful: ', convertValue);
    }else {
        console.log('Error the conversion is not a number NaN');
    }

}

typeChecks();


//Conversion into string

let value2 = 24254677;

let convertValue2 = String(value2);

console.log(convertValue2);

//Conversion in Boolean

let value3 = 12;
let convertValue3 = Boolean(value3);

console.log(convertValue3)

/*
        Other conversion value in Boolean.

        0 => false
        000000000 => false
        89 => true
        142411 => true

        "" => false
        "hi" => true
*/