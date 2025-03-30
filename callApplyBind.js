// CALL, APPLY, BIND

const person1={
    name:'person1',
    print(yoe,stack){
        console.log(`${this.name} has ${yoe} in ${stack} stack`);
    }
}

person1.print(1,'sales')

const person2={
    name:'person2'
}

const person3={
    name:'person3'
}

person1.print.call(person2,3,'mern');
person1.print.apply(person3,[2,'flutter'])


// BIND

const bindValue = person1.print.bind(person3,10,'java');
bindValue()
