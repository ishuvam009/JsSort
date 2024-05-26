function pattern(n){
    for(let i=0;i<n;i++){
        let k = '';
        for(let j=0;j<n;j++){
            k += '*';
        }
        console.log(k);
    }
}

pattern(6);