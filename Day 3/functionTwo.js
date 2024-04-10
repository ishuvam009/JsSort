// Rest Operator

function addCalculateCartPrice(...num1){
    return num1;
}

console.log(addCalculateCartPrice(200,900,8900,9800))

//Accessing the values of an object inside another function.

let user = {
    productName: 'Iphone',
    price: 150000
}

function handleObject(objectValue){
    console.log(`Product name is: ${objectValue.productName} and product price is ${objectValue.price}`)
}

handleObject(user)