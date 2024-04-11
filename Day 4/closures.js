//

function sum(){
    let a = 30; //Closure for function add().

    function add(){
        let b = 50
        let result = a + b;
        console.log(result);
    }
    add()
}

sum()