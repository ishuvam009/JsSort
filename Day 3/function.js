function add(num1, num2) {
    const num3 = num1 + num2;
    console.log(num3);
    return num3;
}

let newValue = add(20,80);

console.log(newValue)

function logInUSer(userName){
    if(!userName){
        console.log('error');
        return;
    }else
        return `${userName}, just loogedIn.`;
}

console.log(logInUSer())