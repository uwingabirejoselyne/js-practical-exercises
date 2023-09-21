// // *Problem:** Implement a function **`filterEvenNumbers(arr)`** that takes an array of numbers as input and returns a new array containing only the even numbers from the input array.

// // **Requirements:**

// // - Use ES6 syntax and features.
// // - Do not use any external libraries or built-in array methods like **`filter`**.
// // - Make sure the function is efficient and handles different edge cases.

const filterEvenNumbers = (arr)=>{

}
filterEvenNumbers([1,2,3])

// const capitalise=(str)=> `${str[0].toUpperCase}${str.slice(1)}`
//  console.log(capitalise('joselyne'));

//  const capitalise = (str) => `${str[0].toUpperCase()}${str.slice(1)}`;

//  console.log(capitalise('joselyne'));

 const sum = (arr)=>{
  let min = Math.max(...arr)
  let max = Math.min(...arr)
  let av = arr.reduce((a,b)=>a+b)/arr.length
  return {min,max,av}
 }
 console.log(sum([20,50,39]));