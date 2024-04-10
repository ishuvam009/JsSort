let mySmbl = Symbol('key1')

console.log(mySmbl)

let users = {
    [mySmbl]: 'keyvalue1',
    name: 'Shuvam',
    age: 24,
    gender: 'male'
}

console.log(users[mySmbl])

users.greeting = function() {
    console.log(`Hello: ${this.name}`);
}

console.log(users.greeting())