// Program to return the second longest word in a sentence. //

// const sentence = 'This is my laptop and I bought it from California';

// function secondLongest(sentence){
//   let thisArray = sentence.split(' ');
// // console.log(thisArray)
//   let sortedArray = thisArray.sort((a,b)=>b.length-a.length);
//   return sortedArray[1];
// }

// console.log(secondLongest(sentence))

// Program to find a string is palindrome or not using recursion //

const str = 'dad';

const checkPalindrome=(str,left,right)=>{
  while(left<=right){
    console.log('left->', left, 'right->',right)
  }
  return checkPalindrome(str,left+2,right-2);
}

console.log(checkPalindrome(str,0,str.length-1));