//array
//for of loop

const arr = [1,2,3,4,5];

for (const num of arr) {
    //console.log(num)
}

const greet = 'Hello World.'

for (const greetings of greet) {
    console.log(`each word is: ${greetings}`)

    if (greetings === ' '){
    break;
    }
}