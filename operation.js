// function basicOp(operation, value1, value2)
// {
//   switch(operation){
//     case '+':
//         return value1+value2;
//     case '-':
//         return value1-value2;
//     case '*':
//         return value1*value2;
//     case '/':
//         return value1*value2;

//     default:
    
//   }
// }
// console.log(basicOp('+', 4,5));


function isPalindrome(x) {
    return x.split(' ').reverse().join(' ').toLowerCase()===x.toLowerCase  ? true : false;
  }
console.log(isPalindrome('ada'));