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

const str = 'daad';

const checkPalindrome=(str,left,right)=>{

  if(str[left]!=str[right]){
    return false;
  }
  if(left>=right){
    return true;
  }
  
  return checkPalindrome(str,left+1,right-1);
}

console.log(checkPalindrome(str,0,str.length-1));