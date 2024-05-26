let k;
function pattern2(n){
    for(let i=0;i<n;i++){
        //let k='';
        for(let j=0;j<=i;j++){
          k += '*';
        }
        console.log(k)
    }
}

pattern2(3);