//Stack Memory
let userName = 'Shuvam';
let userNewName = userName;


//Heap Memory
let user1 = {
    name: 'Shuavm',
    email: 'shuvam@google.com'
}

// modifyUser can access all the dat from user by reference.
let user2 = user;

//Modifying the email of user2
user2.email = 'smandal@google.com';

//it will also change email of use1.