//Switch case

let marks = 41;

switch (true){
    case marks >= 90 && marks <= 100:
        console.log('Your grade is: A');
        break;
    case marks < 90 && marks > 60:
        console.log('Your grade is: B');
        break;
    case marks < 60 && marks > 40:
        console.log('Your grade is: C');
        break;
    case marks < 40 && marks > 30:
        console.log('Your grade is: D');
        break;
    default:
        console.log('Your grade is: F')
}