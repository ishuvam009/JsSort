//array
//for of loop

const arr = [1,2,3,4,5];

for (const num of arr) {
    //console.log(num)
}

const greet = 'Hello World.'

for (const greetings of greet) {
    //console.log(`each word is: ${greetings}`)

    if (greetings === ' '){
    break;
    }
}

//Map

const newMap = new Map();
    newMap.set('IN','India');
    newMap.set('USA','United States Of America');
    newMap.set('FR','France');
    newMap.set('USA','United States Of America');

console.log(newMap)


for (const  [keys,values] of newMap){
    console.log(`The Country Code is: ${keys} & Country name is: ${values}`)
}


// NOT WORKING.
// const myObject = {
//     'game1': 'NFS',
//     'game2': 'GTA5',
//     'game3': 'Spiderman'
// }
//
// for(const [gamesId, gamesName] of myObject){
//     console.log(`The game ID is: ${gamesId} and game name is: ${gamesId}.`)
// }

