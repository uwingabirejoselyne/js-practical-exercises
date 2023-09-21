// function sumMul(n,m){
//     let sum =0
//     if(n<=0){
//         return 'INVALID'
//     }
//     for(let i=n;i<m;i++){
//       if (i% n===0) {
//         sum +=i
//       }
//     }
//      return sum
    
//     }
//     console.log(sumMul(2,10));


// function simpleMultiplication(number) {
// // your code........
// return number %2 ===0 ?number*8:number*9
// }
// console.log(simpleMultiplication(2));

// function cookie(x) {
//     if (typeof x === 'string') {
//         return 'Who ate the last cookie? It was Zach!';
//     } else if (typeof x === 'number' || typeof x === 'float') {
//         return 'Who ate the last cookie? It was Monica!';
//     }
//     else{
//         return "Who ate the last cookie? It was the dog!";
//     }
// }

// console.log(cookie(true));


// function checkAlive (health) {
//     if (health < 0) {
//       return false
//     } else if (health > 0) {
//       return true
//     }
//   }

// const myFavoriteFlavors  = new Set()
// myFavoriteFlavors.add('chocolate chip')
// myFavoriteFlavors.add('cookies and cream')
// myFavoriteFlavors.add(' strawberry')
// myFavoriteFlavors.add('vanilla')
// myFavoriteFlavors.delete(' strawberry')

// console.log(myFavoriteFlavors)

// let student1 = { name: 'James', age: 26, gender: 'male' };
// let student2 = { name: 'Julia', age: 27, gender: 'female' };
// let student3 = { name: 'Richard', age: 31, gender: 'male' };

// const roster = new WeakSet([student1, student2, student3]);
// console.log(roster);



// // Garbage Collection
// student3 = null;
// console.log(roster);
// // WeakSet {Object {name: 'Julia', age: 27, gender: 'female'}, Object {name: 'James', age: 26, gender: 'male'}}


// function twoArePositive(a, b, c) {
//     // Happy Coding
//     return a>0 || b>0 || c>0 ?true:false
//   }
//   console.log(twoArePositive(4,-6,-9));

// function solution(nums){

//   let sortedArray =nums.sort((a,b)=>a-b);
//   return nums ? sortedArray:[]
//  }
//  console.log(solution([]));

// var capitals = function (word) {
// 	// Array to make an ordered list containing the indexes of all capital letters 
//   let a =[]
//   for(let i =0;i<word.length;i++){
//     // checking if charcter at a given index is in uppercase
//     if(word[i] === word[i].toUpperCase()){
//       a.push(i)
//     }
//   }
//   return a

// };
// console.log(capitals('CodEWaRs'));


// function bingo(a) {
 
//   return a.includes();
// }
// console.log(bingo([1,2,3,4,5,6,7,8,9,10]));

// function normalize(s){
//   return ''.

//   return s.replace('-','/')
//   }
//   console.log(normalize('20-05-2017'))

const capitalise=(...para)=>{
  const capitaliy = para.slice(-1)
  const upper = capitaliy.join(' ').toUpperCase()
  return para.join(' ').replace(capitaliy,upper)
}
console.log(capitalise('john', ' doe'))

// const sum =(str)=>{
// return str.split('').reverse().join(' ')
// }
// console.log(sum('joselyne'))

// const commonarray=(arr1,arr2)=>{
//   const set1 = new Set(arr1);
//   const similar = arr2.filter(item=>set1.has(item))
//   return similar
// }
// console.log(commonarray([1,2,3,4,],[2,3]));

// const Duplicate =(str)=>{
//   const set3 = new Set()
//   const arr3 = []

//   for (const str1 of str){
//     if(!set3.has(str1)){
//       set3.add(str1)
//       arr3.push(set3)
//     }
//   }
//   return arr3
// }
// console.log(Duplicate( ["apple", "banana", "cherry", "apple", "banana", "date"]));