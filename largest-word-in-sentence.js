const str = "I will be attending technical interview today";
function largestWord(str){
    let arr = str.split(' ');
    arr.sort((a,b)=>b.length - a.length);
    return arr[0];

}


console.log(largestWord(str));
