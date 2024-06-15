function pattern(n){
    for (let i=0;i<n;i++){
        let lne =   '';
        for (let j=0;j<n-i-1;j++){
            lne += ' ';
        }
        for (let j=0;j<2*i+1;j++){
            lne += '*';
        }
        for (let k=0;k<n-i-1;k++){
            lne += ' ';
        }
        console.log(lne);
    }
}

pattern(6)