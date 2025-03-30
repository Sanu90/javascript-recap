function* gen(){
    let number=2;
    while(number<=10){
        console.log(number);
        yield number;
        number+=2;
        
    }
}

const generate = gen();
for(let i=0;i<=10;i++){
generate.next();
}