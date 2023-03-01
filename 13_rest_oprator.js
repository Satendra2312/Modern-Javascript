function sum(a,b,c,d,...x){
    let total= 0;
    for(t of x){
        console.log(`${t}`);
        total += t;
        console.log(`${total}`);
        console.log(a);
    }
}sum("Ram",20,30,40,  50,60,70,80,90,100); 