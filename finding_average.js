// function betterThanAverage(classPoints, yourPoints) {
//   let average = classPoints.reduce((a,b)=>a+b,0)/classPoints.length;

//   return average <yourPoints?true:false
  
// }
// console.log(betterThanAverage([2,3], 5));


function enough(cap, on, wait) {
    // your code here
    let total =on+wait
    let diff = cap-(on+wait)
    if(total<cap){
      return 0
    }
    else {
      return -diff 
    }
  }
  console.log(enough(62,53,21));

  const capitalise=(str)=> {
    return str[0].toUpperCase()
  }
  console.log(capitalise('joselyne'));