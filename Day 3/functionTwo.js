// Rest Operator

function addCalculateCartPrice(...num1){
    return num1;
}

console.log(addCalculateCartPrice(200,900,8900,9800))

//Parsing object inside a function.

let user = {
    productName: 'Iphone',
    price: 150000
}

function handleObject(objectValue){
    console.log(`Product name is: ${objectValue.productName} and product price is ${objectValue.price}`)
}

handleObject(user)

//Parsing array inside function

let arr = [1,2,3,4,5,6,7,8,9];

function handleArr(arrValue) {
    return arrValue[2]; // index 2 of the array.
}

console.log(handleArr(arr))