// const bowl = {
//     [Symbol('apple')]: { color: 'red', weight: 136.078 },
//     [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
//     [Symbol('orange')]: { color: 'orange', weight: 170.097 },
//     [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
//   };
//   console.log(bowl);


// const digits = [0, 1, 2];
// const arrayIterator = digits[Symbol.iterator]();

// console.log(arrayIterator.next());
// console.log(arrayIterator.next());
// console.log(arrayIterator.next());

// const number = [1,2,3];
// const numberIterator = number[Symbol.iterator]()
// console.log(numberIterator.next());
// for(const i of number){
// console.log(i);
// }

function squared(max){
  return {
    [Symbol.iterator](){
      let n=0
  return{
    next(){
      n++ ;

      if(n<=max){
        return {
          value:n*n,
          done:false
        }
      }
      return {
        value:undefined,
        done:true
      }
    }
  }
    }
  }
  
}
  
// for(const n of squared(10)){
//   console.log(n);
// }
const[a,b,c] =squared(10)
console.log(a);
console.log(b);
console.log(c);


