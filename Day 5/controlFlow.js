//Control Flow

//Logic Flow

//if()

//comparison operator
/*
    <
    >
    <=
    >=
    ==
    ===
    !
    !==
    !===
*/


/*
    for-> -value or 0 = freezing
    for-> value 1 to 17 = cold
    for-> value 18 to 29 = normal
    for-> value 30 and above = hot
*/
let tem = 18;

if(tem > 30){
    console.log('Its hot.');
}else if(tem <=0){
    console.log('Its freezing.')
}else if(tem < 18){
    console.log('Its Cold.')
}else{
    console.log('Its normal')
}