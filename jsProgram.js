// Accept a string and return an object with the count of each character

let name='userrrr'

const countChar = (name)=>{
let obj={}
for(let i=0;i<name.length;i++){
    if(!obj[name[i]]){
        obj[name[i]]=0;
    }
    obj[name[i]]++;
}
return obj;
}

console.log(countChar(name));
